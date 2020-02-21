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

import keyMirror from 'keymirror';

import {AGGREGATION_TYPES} from 'constants/default-settings';
import {DefaultColorRange} from 'constants/color-ranges';

export const PROPERTY_GROUPS = keyMirror({
  color: null,
  stroke: null,
  radius: null,
  height: null,

  // for heatmap aggregation
  cell: null,
  precision: null
});

export const DEFAULT_LAYER_OPACITY = 0.8;

export const DEFAULT_TEXT_LABEL = {
  field: null,
  color: [255, 255, 255],
  size: 18,
  offset: [0, 0],
  anchor: 'start',
  alignment: 'center'
};

export const DEFAULT_COLOR_RANGE = DefaultColorRange;

export const DEFAULT_CUSTOM_PALETTE = {
  name: 'Custom Palette',
  type: 'custom',
  category: 'Custom',
  colors: []
}

export const DEFAULT_COLOR_UI = {
  // customPalette in edit
  customPalette: DEFAULT_CUSTOM_PALETTE,
  // show color sketcher modal
  showSketcher: false,
  // show color range selection panel
  showDropdown: false,
  // color range selector config
  colorRangeConfig: {
    type: 'all',
    steps: 6,
    reversed: false,
    custom: false
  }
};

export const LAYER_VIS_CONFIGS = {
  thickness: {
    type: 'number',
    defaultValue: 2,
    label: '笔触宽度',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: PROPERTY_GROUPS.stroke,
    property: 'thickness'
  },
  strokeWidthRange: {
    type: 'number',
    defaultValue: [0, 10],
    label: '笔触宽度范围',
    isRanged: true,
    range: [0, 200],
    step: 0.1,
    group: PROPERTY_GROUPS.stroke,
    property: 'sizeRange'
  },
  trailLength: {
    type: 'number',
    defaultValue: 180,
    label: '路径宽度',
    isRanged: false,
    range: [1, 1000],
    step: 1,
    group: PROPERTY_GROUPS.stroke,
    property: 'trailLength'
  },
  // radius is actually radiusScale in deck.gl
  radius: {
    type: 'number',
    defaultValue: 10,
    label: '半径',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: PROPERTY_GROUPS.radius,
    property: 'radius'
  },
  fixedRadius: {
    defaultValue: false,
    type: 'boolean',
    label: '固定半径为米',
    description: '将半径映射到绝对半径（米），例如 5至5米',
    group: PROPERTY_GROUPS.radius,
    property: 'fixedRadius'
  },
  radiusRange: {
    type: 'number',
    defaultValue: [0, 50],
    isRanged: true,
    range: [0, 500],
    step: 0.1,
    label: '半径范围',
    group: PROPERTY_GROUPS.radius,
    property: 'radiusRange'
  },
  clusterRadius: {
    type: 'number',
    label: '集聚半径(像素)',
    defaultValue: 40,
    isRanged: false,
    range: [1, 500],
    step: 0.1,
    group: PROPERTY_GROUPS.radius,
    property: 'clusterRadius'
  },
  clusterRadiusRange: {
    type: 'number',
    label: '半径范围(像素)',
    defaultValue: [1, 40],
    isRanged: true,
    range: [1, 150],
    step: 0.1,
    group: PROPERTY_GROUPS.radius,
    property: 'radiusRange'
  },
  opacity: {
    type: 'number',
    defaultValue: DEFAULT_LAYER_OPACITY,
    label: '透明度',
    isRanged: false,
    range: [0, 1],
    step: 0.01,
    group: PROPERTY_GROUPS.color,
    property: 'opacity'
  },
  coverage: {
    type: 'number',
    defaultValue: 1,
    label: '范围',
    isRanged: false,
    range: [0, 1],
    step: 0.01,
    group: PROPERTY_GROUPS.cell,
    property: 'coverage'
  },
  // used in point layer
  outline: {
    type: 'boolean',
    defaultValue: false,
    label: '边框',
    group: PROPERTY_GROUPS.display,
    property: 'outline'
  },
  colorRange: {
    type: 'color-range-select',
    defaultValue: DefaultColorRange,
    label: '色域',
    group: PROPERTY_GROUPS.color,
    property: 'colorRange'
  },
  strokeColorRange: {
    type: 'color-range-select',
    defaultValue: DefaultColorRange,
    label: '笔触色域',
    group: PROPERTY_GROUPS.color,
    property: 'strokeColorRange'
  },
  targetColor: {
    type: 'color-select',
    label: '目标颜色',
    defaultValue: null,
    group: PROPERTY_GROUPS.color,
    property: 'targetColor'
  },
  strokeColor: {
    type: 'color-select',
    label: '笔触颜色',
    defaultValue: null,
    group: PROPERTY_GROUPS.color,
    property: 'strokeColor'
  },
  aggregation: {
    type: 'select',
    defaultValue: AGGREGATION_TYPES.average,
    label: '颜色聚合',
    // aggregation options are based on color field types
    options: Object.keys(AGGREGATION_TYPES),
    group: PROPERTY_GROUPS.color,
    property: 'colorAggregation',
    condition: config => config.colorField
  },
  sizeAggregation: {
    type: 'select',
    defaultValue: AGGREGATION_TYPES.average,
    label: '高度聚合',
    // aggregation options are based on color field types
    options: Object.keys(AGGREGATION_TYPES),
    group: PROPERTY_GROUPS.height,
    property: 'sizeAggregation',
    condition: config => config.sizeField
  },
  percentile: {
    type: 'number',
    defaultValue: [0, 100],
    label: config =>
      `Filter by ${
        config.colorField
          ? `${config.visConfig.colorAggregation} ${config.colorField.name}`
          : 'count'
      } percentile`,
    isRanged: true,
    range: [0, 100],
    step: 0.01,
    group: PROPERTY_GROUPS.color,
    property: 'percentile',

    // percentile filter only makes sense with linear aggregation
    condition: config => config.colorScale !== 'ordinal'
  },
  elevationPercentile: {
    type: 'number',
    defaultValue: [0, 100],
    label: config =>
      `Filter by ${
        config.sizeField
          ? `${config.visConfig.sizeAggregation} ${config.sizeField.name}`
          : 'count'
      } percentile`,
    isRanged: true,
    range: [0, 100],
    step: 0.01,
    group: PROPERTY_GROUPS.height,
    property: 'elevationPercentile',
    // percentile filter only makes sense with linear aggregation
    condition: config =>
      config.visConfig.enable3d && (config.colorField || config.sizeField)
  },
  resolution: {
    type: 'number',
    defaultValue: 8,
    label: '分辨率范围',
    isRanged: false,
    range: [0, 13],
    step: 1,
    group: PROPERTY_GROUPS.cell,
    property: 'resolution'
  },
  sizeScale: {
    type: 'number',
    defaultValue: 10,
    label: '大小',
    isRanged: false,
    range: [1, 1000],
    step: 1,
    property: 'sizeScale'
  },
  angle: {
    type: 'number',
    defaultValue: 0,
    isRanged: false,
    range: [0, 360],
    step: 1
  },
  angleZ: {
    type: 'number',
    defaultValue: 90,
    isRanged: false,
    range: [0, 360],
    step: 1
  },
  worldUnitSize: {
    type: 'number',
    defaultValue: 1,
    label: 'World Unit Size',
    isRanged: false,
    range: [0, 500],
    step: 0.0001,
    group: PROPERTY_GROUPS.cell,
    property: 'worldUnitSize'
  },
  elevationScale: {
    type: 'number',
    defaultValue: 5,
    label: '高程比例',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: PROPERTY_GROUPS.height,
    property: 'elevationScale'
  },
  elevationRange: {
    type: 'number',
    defaultValue: [0, 500],
    label: '高度比例',
    isRanged: true,
    range: [0, 1000],
    step: 0.01,
    group: PROPERTY_GROUPS.height,
    property: 'sizeRange'
  },
  coverageRange: {
    type: 'number',
    defaultValue: [0, 1],
    label: '覆盖范围',
    isRanged: true,
    range: [0, 1],
    step: 0.01,
    group: PROPERTY_GROUPS.radius,
    property: 'coverageRange'
  },
  // hi precision is deprecated by deck.gl
  'hi-precision': {
    type: 'boolean',
    defaultValue: false,
    label: '高精度渲染',
    group: PROPERTY_GROUPS.precision,
    property: 'hi-precision',
    description: '高精度将导致性能下降'
  },
  enable3d: {
    type: 'boolean',
    defaultValue: false,
    label: '高度',
    group: PROPERTY_GROUPS.height,
    property: 'enable3d',
    description: '单击地图右上角按钮切换到三维视图'
  },
  stroked: {
    type: 'boolean',
    label: '笔触',
    defaultValue: true,
    group: PROPERTY_GROUPS.display,
    property: 'stroked'
  },
  filled: {
    type: 'boolean',
    label: '填充',
    defaultValue: false,
    group: PROPERTY_GROUPS.display,
    property: 'filled'
  },
  extruded: {
    type: 'boolean',
    defaultValue: false,
    label: '面高度',
    group: PROPERTY_GROUPS.display,
    property: 'extruded'
  },
  wireframe: {
    type: 'boolean',
    defaultValue: false,
    label: '显示线框',
    group: PROPERTY_GROUPS.display,
    property: 'wireframe'
  },
  // used for heatmap
  weight: {
    type: 'number',
    defaultValue: 1,
    label: '权重',
    isRanged: false,
    range: [0.01, 500],
    step: 0.01,
    group: PROPERTY_GROUPS.cell,
    property: 'weight',
    condition: config => config.weightField
  },
  heatmapRadius: {
    type: 'number',
    defaultValue: 20,
    label: '半径',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: PROPERTY_GROUPS.cell,
    property: 'radius'
  }
};

export const LAYER_TEXT_CONFIGS = {
  fontSize: {
    type: 'number',
    range: [1, 100],
    value0: 1,
    step: 1,
    isRanged: false,
    label: '大小',
    showInput: true
  },
  textAnchor: {
    type: 'select',
    options: ['start', 'middle', 'end'],
    multiSelect: false,
    searchable: false
  },
  textAlignment: {
    type: 'select',
    options: ['top', 'center', 'bottom'],
    multiSelect: false,
    searchable: false
  }
};
