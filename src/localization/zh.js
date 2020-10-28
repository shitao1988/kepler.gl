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

import {LOCALES} from './locales';

export default {
  property: {
    weight: '权重',
    label: '标签',
    fillColor: '填充色',
    color: '颜色',
    strokeColor: 'stroke color',
    radius: '半径',
    outline: '边框',
    stroke: 'stroke',
    density: '密度',
    height: '高度',
    sum: '总和',
    pointCount: '点数量'
  },
  placeholder: {
    search: '查询',
    selectField: '选择字段',
    yAxis: 'Y 轴',
    selectType: '选择类型',
    selectValue: '选择值',
    enterValue: '输入值',
    empty: '空'
  },
  misc: {
    by: '根据',
    valuesIn: '值属于',
    valueEquals: '值等于',
    dataSource: '数据源',
    brushRadius: '毛刷半径 (km)',
    empty: ' '
  },
  mapLayers: {
    title: '地图图层',
    label: '标注',
    road: '道路',
    border: '边界',
    building: '建筑',
    water: '水',
    land: '陆地',
    '3dBuilding': '3d 建筑'
  },
  panel: {
    text: {
      label: '标注',
      labelWithId: '标注 {labelId}',
      fontSize: '字体大小',
      fontColor: '字体颜色',
      textAnchor: '文本 anchor',
      alignment: '对齐',
      addMoreLabel: '添加标注'
    }
  },
  sidebar: {
    panels: {
      layer: '图层',
      filter: '筛选',
      interaction: '交互',
      basemap: '底图'
    }
  },
  layer: {
    required: '必须*',
    radius: '半径',
    color: '颜色',
    fillColor: '填充色',
    outline: '边框',
    weight: '权重',
    propertyBasedOn: '基于 {property}',
    coverage: '覆盖',
    stroke: '笔画',
    strokeWidth: '笔画宽度',
    strokeColor: '笔画颜色',
    basic: '基本',
    trailLength: 'Trail Length',
    trailLengthDescription: '路径淡出时间',
    newLayer: '新图层',
    elevationByDescription: '当关闭时，高度以点数量为基础',
    colorByDescription: '当关闭时，颜色是根据点数量为基础',
    aggregateBy: '汇总{字段}基于',
    '3DModel': '3D 模型',
    '3DModelOptions': '3D 模型选项',
    type: {
      point: '点',
      arc: '弧',
      line: '直线',
      grid: '网格',
      hexbin: '蜂窝',
      polygon: '多边形',
      geojson: 'geojson',
      cluster: '集聚',
      icon: '图标',
      heatmap: ' 热力图',
      pie:'饼图',
      bar:'柱状图',
      h3: 'H3',
      trip: '旅行',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    strokeWidth: '笔画宽度',
    strokeWidthRange: '笔画宽度范围',
    radius: '半径',
    fixedRadius: '固定半径单位为米',
    fixedRadiusDescription: '地图半径为绝对半径，单位为米, 如5至5米',
    radiusRange: '半径范围',
    clusterRadius: '群集半径，单位为Pixels',
    radiusRangePixels: '半径范围，单位为像素',
    opacity: '透明度',
    coverage: '填充',
    outline: '边框',
    colorRange: '色带',
    stroke: '画笔',
    strokeColor: '画笔颜色',
    strokeColorRange: '画笔色带',
    targetColor: '目标颜色',
    colorAggregation: '颜色聚合',
    heightAggregation: '高度聚合',
    resolutionRange: '分辨率范围',
    sizeScale: '大小尺寸',
    worldUnitSize: '世界单位大小',
    elevationScale: '高程比例尺',
    heightScale: '高度比例尺',
    coverageRange: '覆盖范围',
    highPrecisionRendering: '高精度渲染',
    highPrecisionRenderingDescription: '高精度会导致性能变慢',
    height: '高度',
    heightDescription: '点击地图右上方的按钮切换到3D视图',
    fill: '填充',
    enablePolygonHeight: '启用多边形高度',
    showWireframe: '显示线框',
    weightIntensity: '权重强度',
    zoomScale: '缩放比例',
    heightRange: '高度范围'
  },
  layerManager: {
    addData: '添加数据',
    addLayer: '添加图层',
    layerBlending: '图层混合'
  },
  mapManager: {
    mapStyle: '地图样式',
    addMapStyle: '添加地图样式',
    '3dBuildingColor': '3D建筑颜色'
  },
  layerConfiguration: {
    defaultDescription: '根据所选字段计算{property}',
    howTo: '指导'
  },
  filterManager: {
    addFilter: '添加筛选'
  },
  datasetTitle: {
    showDataTable: '显示数据表',
    removeDataset: '移除数据集'
  },
  datasetInfo: {
    rowCount: '{rowCount} 行'
  },
  tooltip: {
    hideLayer: '隐藏图层',
    showLayer: '显示图层',
    hideFeature: '隐藏要素',
    showFeature: '显示要素',
    hide: '隐藏',
    show: '显示',
    removeLayer: '移除图层',
    layerSettings: '图层设置',
    closePanel: '关闭当前面板',
    switchToDualView: '切换到双地图视图',
    showLegend: '显示图例',
    disable3DMap: '禁用3D地图',
    DrawOnMap: '在地图上标绘',
    selectLocale: '选择地区',
    hideLayerPanel: '隐藏图层面板',
    showLayerPanel: '显示图层面板',
    moveToTop: '移动到数据层的顶部',
    selectBaseMapStyle: '选择基础地图样式',
    delete: '删除',
    timePlayback: '时间回放',
    cloudStorage: '云存储',
    '3DMap': '3D地图'
  },
  toolbar: {
    exportImage: '导出图片',
    exportData: '导出数据',
    exportMap: '导出地图',
    shareMapURL: '分享地图URl',
    saveMap: '保存地图',
    select: '选择',
    polygon: '多边形',
    rectangle: '矩形',
    hide: '隐藏',
    show: '显示',
    ...LOCALES
  },
  modal: {
    title: {
      deleteDataset: '删除数据集',
      addDataToMap: '添加数据到地图',
      exportImage: '导出图片',
      exportData: '导出数据',
      exportMap: '导出地图',
      addCustomMapboxStyle: '添加自定义MapBox样式',
      saveMap: '保存地图',
      shareURL: '分享URL'
    },
    button: {
      delete: '删除',
      download: '下载',
      export: '导出',
      addStyle: '添加样式',
      save: '保存',
      defaultCancel: '取消',
      defaultConfirm: '确定'
    },
    exportImage: {
      ratioTitle: '比例',
      ratioDescription: '选择不同用途的比例.',
      ratioOriginalScreen: '原始画面',
      ratioCustom: '自定义',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: '分辨率',
      resolutionDescription: '高分辨率更适合于打印.',
      mapLegendTitle: '地图图例',
      mapLegendAdd: '在地图上添加图例'
    },
    exportData: {
      datasetTitle: '数据集',
      datasetSubtitle: '选择你要导出的数据集',
      allDatasets: '所有',
      dataTypeTitle: '数据类型',
      dataTypeSubtitle: '选择你要导出的数据类型',
      filterDataTitle: '过滤数据',
      filterDataSubtitle: '你可以选择导出原始数据或过滤后的数据',
      filteredData: '过滤后的数据',
      unfilteredData: '全部数据',
      fileCount: '{fileCount} 个文件',
      rowCount: '{rowCount} 行'
    },
    deleteData: {
      warning: '删除这个数据集。将影响{length}图层'
    },
    addStyle: {
      publishTitle: '1. Publish your style at mapbox or provide access token',
      publishSubtitle1: 'You can create your own map style at',
      publishSubtitle2: 'and',
      publishSubtitle3: 'publish',
      publishSubtitle4: 'it.',
      publishSubtitle5: 'To use private style, paste your',
      publishSubtitle6: 'access token',
      publishSubtitle7:
        'here. *kepler.gl is a client-side application, data stays in your browser..',
      exampleToken: 'e.g. pk.abcdefg.xxxxxx',
      pasteTitle: '2. Paste style url',
      pasteSubtitle1: 'What is a',
      pasteSubtitle2: 'style URL',
      namingTitle: '3. Name your style'
    },
    shareMap: {
      shareUriTitle: '分享地图Url',
      shareUriSubtitle: '生成一个地图URL与他人分享',
      cloudTitle: '云存储',
      cloudSubtitle: '登录并上传地图数据到个人云端存储',
      shareDisclaimer:
        'kepler.gl会把你的地图数据保存到你的个人云存储，只有拥有该URL的人才能访问你的地图和数据. ' +
        '您可以随时编辑/删除您的云账户中的数据文件.',
      gotoPage: '转到你的Kepler.gl {currentProvider}页面'
    },
    statusPanel: {
      mapUploading: '地图上传',
      error: '错误'
    },
    saveMap: {
      title: '云存储',
      subtitle: '登录后将地图保存到个人云端存储空间'
    },
    exportMap: {
      formatTitle: '地图格式',
      formatSubtitle: '选择要导出地图的格式',
      html: {
        selection: '导出你的地图到一个交互式的html文件.',
        tokenTitle: 'Mapbox访问令牌',
        tokenSubtitle: '在html中使用你自己的Mapbox访问令牌（可选）',
        tokenPlaceholder: '粘贴你的Mapbox访问令牌',
        tokenMisuseWarning:
          '*如果您没有提供您自己的令牌，当我们更换令牌时，地图可能会无法显示，以避免误用。 ',
        tokenDisclaimer: '您可以参考下面的说明更改Mapbox令牌: ',
        tokenUpdate: '如何更新现有地图令牌.',
        modeTitle: '地图模式',
        modeSubtitle1: '选择应用模式. 更多 ',
        modeSubtitle2: '信息',
        modeDescription: '允许用户对地图{mode}',
        read: '只读',
        edit: '编辑'
      },
      json: {
        configTitle: '地图配置',
        configDisclaimer:
          '地图配置将包含在Json文件中。如果你在自己的应用程序中使用kepler.gl。你可以复制这个配置并将其传递给',
        selection:
          '将当前地图数据和配置导出到一个Json文件中。以后你可以通过将此文件上传到kepler.gl以打开相同的地图.',
        disclaimer:
          '* 地图配置与加载的数据集耦合。`dataId`用于绑定图层、过滤器和工具提示到特定的数据集. ' +
          '当将此配置传递给addDataToMap时，请确保数据集的id与此配置中的dataId/s相匹配.'
      }
    },
    loadingDialog: {
      loading: '加载中...'
    },
    loadData: {
      upload: '加载文件',
      storage: '从存储中加载'
    },
    tripInfo: {
      title: '如何启用行程动画',
      description1:
        '为了使路径动画化，geoJSON数据需要在其特征几何中包含`LineString`，LineString中的坐标需要有4个元素，格式为',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2:
        '最后一个元素是时间戳。有效的时间戳格式包括以秒为单位，如`1564184363`或以毫秒为单位，如`1564184363000`.',
      example: '例如:'
    },
    iconInfo: {
      title: '如何绘制图标',
      description1:
        '在你的csv中，创建一个列，把你想画的图标的名字放在里面。 如果你不想让图标显示在某些点上，你可以把单元格留空。',
      code: '图标',
      description2: ' 自动为你创建一个图标图层.',
      example: '例子:',
      icons: 'Icons'
    },
    storageMapViewer: {
      lastModified: '最后一次修改{lastUpdated}',
      back: '返回'
    },
    overwriteMap: {
      title: '保存地图...',
      alreadyExists: '已经存在于你的{mapSaved}中。你想覆盖它吗？'
    },
    loadStorageMap: {
      back: '返回',
      goToPage: '转到你的Kepler.gl {displayName}页面',
      storageMaps: '存储/地图',
      noSavedMaps: '还没有保存地图'
    }
  },
  header: {
    visibleLayers: '可见图层',
    layerLegend: '图层图例'
  },
  interactions: {
    tooltip: '提示',
    brush: '笔刷',
    coordinate: '坐标'
  },
  layerBlending: {
    title: '图层混合',
    additive: '加色',
    normal: '标准',
    subtractive: '减色'
  },
  columns: {
    title: '列',
    lat: '维度',
    lng: '经度',
    altitude: '高程',
    icon: '图标',
    geojson: 'geojson',
    arc: {
      lat0: '起点 lat',
      lng0: '起点 lng',
      lat1: '终点 lat',
      lng1: '终点 lng'
    },
    grid: {
      worldUnitSize: '格网大小 (km)'
    },
    hexagon: {
      worldUnitSize: '蜂窝半径 (km)'
    }
  },
  color: {
    customPalette: '自定义调色板',
    steps: '等级',
    type: '类型',
    reversed: '反置'
  },
  scale: {
    colorScale: '色阶',
    sizeScale: '尺寸',
    strokeScale: 'Stroke Scale',
    scale: '比例'
  },
  fileUploader: {
    message: '在这里拖放你的文件',
    chromeMessage:
      '*Chrome用户。限制文件大小为250MB，如果需要上传更大的文件，请尝试Safari',
    disclaimer:
      '*kepler.gl是一个客户端应用程序，没有服务器后台. 数据只存在于你的机器/浏览器上. ' +
      '不向任何服务器发送任何信息或地图数据.',
    configUploadMessage:
      '上传**CSV**、**GeoJson**或保存的地图**Json**。阅读更多关于[**支持的文件格式**]的信息',
    browseFiles: '浏览你的文件',
    uploading: '上传',
    fileNotSupported: '文件{errorFiles}不支持.',
    or: '或'
  },
  density: '密度',
  'Bug Report': 'Bug Report',
  'User Guide': '用户指南',
  Save: '保存',
  Share: '分享'
};
