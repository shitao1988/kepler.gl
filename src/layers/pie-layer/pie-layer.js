import PieLayerIcon from './pie-layer-icon';
import Layer, {OVERLAY_TYPE} from '../base-layer';
import React from 'react';
import {Marker} from 'react-map-gl';
import {hexToRgb} from 'utils/color-utils';
import {DEFAULT_LAYER_COLOR, CHANNEL_SCALES} from 'constants/default-settings';
import {Chart, Geom, Axis, Tooltip, Coord} from 'bizcharts';

export const pointPosAccessor = ({lat, lng, altitude}) => d => [
  // lng
  d.data[lng.fieldIdx],
  // lat
  d.data[lat.fieldIdx],
  altitude && altitude.fieldIdx > -1 ? d.data[altitude.fieldIdx] : 0
];

export const pointRequiredColumns = ['lng','lat'];
export const columnLabels = {
  lat: '维度',
  lng: '经度'
};

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
  get columnLabels() {
    return columnLabels;
  }
  get isAggregated() {
    return false;
  }

  get requiredLayerColumns() {
    return pointRequiredColumns;
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
    const {chartColumns} = this.config;

    const {gpuFilter} = datasets[this.config.dataId];
    const {data, triggerChanged} = this.updateData(datasets, oldLayerData);
    const getPosition = this.getPositionAccessor();
    return {
      data,
      getPosition,
      getFilterValue: gpuFilter.filterValueAccessor(),
      chartColumns
    };
  }
  /* eslint-enable complexity */

  updateLayerMeta(allData) {
    const getPosition = this.getPositionAccessor();
    const bounds = this.getPointsBounds(allData, d => getPosition({data: d}));
    this.updateMeta({bounds});
  }


  /**
   *
   *
   * @returns
   * @memberof PieLayer
   */
  renderPieChart(item, chartColumns) {
    if (!chartColumns.length) {
      return null;
    }

    const data = chartColumns.map(col => {
      return {
        item: col.field.name,
        value: item.data[col.field.tableFieldIndex-1]||0
      };
    });

    return (
      <Chart
        height={100}
        width={100}
        data={data}
        scale={{
          value: {
            formatter: val => {
              val = val * 100 + '%';
              return val;
            }
          }
        }}
        padding={[0, 0, 0, 0]}
        forceFit
      >
        <Coord type={'theta'} radius={0.75} innerRadius={0.6} />
        <Axis name="value" />

        <Tooltip
          showTitle={false}
          triggerOn="click"
          itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
        />
        <Geom
          type="intervalStack"
          position="value"
          color="item"
          tooltip={[
            'item*value',
            (item, value) => {
              value = value * 1.00 + '%';
              return {
                name: item,
                value: value
              };
            }
          ]}
          style={{
            lineWidth: 1,
            stroke: '#fff'
          }}
        ></Geom>
      </Chart>
    );
  }

  renderLayer(opts) {
    const {data} = opts;
    return (
      this.config.isVisible &&
      data.data &&
      data.data.map((item,index) => {
        return (
          <Marker
            key={index}
            captureScroll={true}
            latitude={item.position[1]}
            longitude={item.position[0]}
            offsetLeft={-50}
            offsetTop={-50}
          >
            <div style={{color: '#FFF'}}>
              {this.renderPieChart(item, data.chartColumns)}
            </div>
          </Marker>
        );
      })
    );
  }
}
