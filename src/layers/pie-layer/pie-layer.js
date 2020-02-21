// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import {BrushingExtension} from '@deck.gl/extensions';
import PieLayerIcon from './pie-layer-icon';
import Layer,{OVERLAY_TYPE}from '../base-layer';
import React from 'react';
import {Marker} from 'react-map-gl';
import {hexToRgb} from 'utils/color-utils';
import {DEFAULT_LAYER_COLOR, CHANNEL_SCALES} from 'constants/default-settings';
import {getTextOffsetByRadius, formatTextLabelData} from '../layer-text-label';

import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Guide,
} from "bizcharts";
import DataSet from "@antv/data-set";

export const pointPosAccessor = ({lat, lng, altitude}) => d => [
  // lng
  d.data[lng.fieldIdx],
  // lat
  d.data[lat.fieldIdx],
  altitude && altitude.fieldIdx > -1 ? d.data[altitude.fieldIdx] : 0
];

export const pointRequiredColumns = ['lat', 'lng'];
export const pointOptionalColumns = ['altitude'];

const brushingExtension = new BrushingExtension();

export const pointVisConfigs = {
  radius: 'radius',
  fixedRadius: 'fixedRadius',
  opacity: 'opacity',
  outline: 'outline',
  thickness: 'thickness',
  strokeColor: 'strokeColor',
  colorRange: 'colorRange',
  strokeColorRange: 'strokeColorRange',
  radiusRange: 'radiusRange',
  filled: {
    type: 'boolean',
    label: '填充色',
    defaultValue: true,
    property: 'filled'
  }
};

export default class PieLayer extends Layer {
  constructor(props) {
    super(props);

    this.registerVisConfig(pointVisConfigs);
    this.getPositionAccessor = () => pointPosAccessor(this.config.columns);
  }

  get overlayType() {
    return OVERLAY_TYPE.mapboxglMarker;
  }

  get type() {
    return 'pie';
  }

  get layerIcon() {
    return PieLayerIcon;
  }

  get isAggregated() {
    return false;
  }

  get requiredLayerColumns() {
    return pointRequiredColumns;
  }

  get optionalColumns() {
    return pointOptionalColumns;
  }

  get columnPairs() {
    return this.defaultPointColumnPairs;
  }

  get noneLayerDataAffectingProps() {
    return [...super.noneLayerDataAffectingProps, 'radius'];
  }

  get visualChannels() {
    return {
      color: {
        ...super.visualChannels.color,
        condition: config => config.visConfig.filled
      },
      strokeColor: {
        property: 'strokeColor',
        field: 'strokeColorField',
        scale: 'strokeColorScale',
        domain: 'strokeColorDomain',
        range: 'strokeColorRange',
        key: 'strokeColor',
        channelScaleType: CHANNEL_SCALES.color,
        condition: config => config.visConfig.outline
      },
      size: {
        ...super.visualChannels.size,
        range: 'radiusRange',
        property: 'radius',
        channelScaleType: 'radius'
      }
    };
  }

  static findDefaultLayerProps({fieldPairs = []}) {
    const props = [];

    // Make layer for each pair
    fieldPairs.forEach(pair => {
      // find fields for tableFieldIndex
      const latField = pair.pair.lat;
      const lngField = pair.pair.lng;
      const layerName = pair.defaultName;

      const prop = {
        label: layerName.length ? layerName : 'Pie'
      };

      // default layer color for begintrip and dropoff point
      if (latField.value in DEFAULT_LAYER_COLOR) {
        prop.color = hexToRgb(DEFAULT_LAYER_COLOR[latField.value]);
      }

      // set the first layer to be visible
      if (props.length === 0) {
        prop.isVisible = true;
      }

      prop.columns = {
        lat: latField,
        lng: lngField,
        altitude: {value: null, fieldIdx: -1, optional: true}
      };

      props.push(prop);
    });

    return {props};
  }

  getDefaultLayerConfig(props = {}) {
    return {
      ...super.getDefaultLayerConfig(props),

      // add stroke color visual channel
      strokeColorField: null,
      strokeColorDomain: [0, 1],
      strokeColorScale: 'quantile'
    };
  }

  calculateDataAttribute({allData, filteredIndex}, getPosition) {
    const data = [];

    for (let i = 0; i < filteredIndex.length; i++) {
      const index = filteredIndex[i];
      const pos = getPosition({data: allData[index]});

      // if doesn't have point lat or lng, do not add the point
      // deck.gl can't handle position = null
      if (pos.every(Number.isFinite)) {
        data.push({
          data: allData[index],
          position: pos,
          // index is important for filter
          index
        });
      }
    }
    return data;
  }

  formatLayerData(datasets, oldLayerData) {
    const {
      colorScale,
      colorDomain,
      colorField,
      strokeColorField,
      strokeColorScale,
      strokeColorDomain,
      color,
      sizeField,
      sizeScale,
      sizeDomain,
      textLabel,
      visConfig: {
        radiusRange,
        fixedRadius,
        colorRange,
        strokeColorRange,
        strokeColor
      }
    } = this.config;

    const {gpuFilter} = datasets[this.config.dataId];
    const {data, triggerChanged} = this.updateData(
      datasets,
      oldLayerData
    );
    const getPosition = this.getPositionAccessor();
    // point color

    const cScale =
      colorField &&
      this.getVisChannelScale(
        colorScale,
        colorDomain,
        colorRange.colors.map(hexToRgb)
      );

    // stroke color
    const scScale =
      strokeColorField &&
      this.getVisChannelScale(
        strokeColorScale,
        strokeColorDomain,
        strokeColorRange.colors.map(hexToRgb)
      );

    // point radius
    const rScale =
      sizeField &&
      this.getVisChannelScale(sizeScale, sizeDomain, radiusRange, fixedRadius);

    const getRadius = rScale
      ? d => this.getEncodedChannelValue(rScale, d.data, sizeField, 0)
      : 1;

    const getFillColor = cScale
      ? d => this.getEncodedChannelValue(cScale, d.data, colorField)
      : color;

    const getLineColor = scScale
      ? d => this.getEncodedChannelValue(scScale, d.data, strokeColorField)
      : strokeColor || color;

    // get all distinct characters in the text labels
    const textLabels = formatTextLabelData({
      textLabel,
      triggerChanged,
      oldLayerData,
      data
    });

    return {
      data,
      getPosition,
      getFillColor,
      getLineColor,
      getFilterValue: gpuFilter.filterValueAccessor(),
      getRadius,
      textLabels
    };
  }
  /* eslint-enable complexity */

  updateLayerMeta(allData) {
    const getPosition = this.getPositionAccessor();
    const bounds = this.getPointsBounds(allData, d => getPosition({data: d}));
    this.updateMeta({bounds});

  }

  renderPieChart(){
    const { DataView } = DataSet;
    const { Html } = Guide;
    const data = [
      {
        item: "事例一",
        count: 40
      },
      {
        item: "事例二",
        count: 21
      },
      {
        item: "事例三",
        count: 17
      },
      {
        item: "事例四",
        count: 13
      },
      {
        item: "事例五",
        count: 9
      }
    ];
    const dv = new DataView();
    dv.source(data).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });

    return  <Chart
    height={100}
    width={100}
    data={dv}
    scale={{
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    }}
    padding={[0, 0, 0, 0]}
    forceFit
  >
    <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
    <Axis name="percent" />

    <Tooltip
      showTitle={false}
      itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
    />
    <Geom
      type="intervalStack"
      position="percent"
      color="item"
      tooltip={[
        "item*percent",
        (item, percent) => {
          percent = percent * 100 + "%";
          return {
            name: item,
            value: percent
          };
        }
      ]}
      style={{
        lineWidth: 1,
        stroke: "#fff"
      }}
    >

    </Geom>
  </Chart>
  }

  renderLayer(opts) {
    const {data} = opts;



    return this.config.isVisible&&data.data&&data.data.map(item => {
      return <Marker
      latitude={item.position[1]}
      longitude={item.position[0]}
      offsetLeft={-50}
      offsetTop={-50}
    >
      <div style={{color:"#FFF"}}>{this.renderPieChart()}</div>
    </Marker>
    });
  }
}
