// Copyright (c) 2021 Uber Technologies, Inc.
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

const mapStyle={
  "version": 8,
  "metadata": {},
  "sources": {
    "img_w": {
      "type": "raster",
      "tiles": [
        "http://t0.tianditu.gov.cn/DataServer?T=img_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94"
      ],
      "tileSize": 256
    },
    "cia_w": {
      "type": "raster",
      "tiles": [
        "http://t0.tianditu.gov.cn/DataServer?T=cia_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94"
      ],
      "tileSize": 256
    },
    "vec_w": {
      "type": "raster",
      "tiles": [
        "http://t0.tianditu.gov.cn/DataServer?T=vec_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94"
      ],
      "tileSize": 256
    },
    "cva_w": {
        "type": "raster",
        "tiles": [
          "http://t0.tianditu.gov.cn/DataServer?T=cva_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94"
        ],
        "tileSize": 256
      },
    "block": {
      "type": "vector",
      "scheme": "xyz",
      "zoomOffset": -1,
      "minzoom": 10,
      "tiles": [
        "http://geowork.wicp.vip:57757/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:block&STYLE=&TILEMATRIX=EPSG:4326:{z}&TILEMATRIXSET=EPSG:4326&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"
      ]
    },
    "roads": {
      "type": "vector",
      "scheme": "xyz",
      "zoomOffset": -1,
      "minzoom": 10,
      "tiles": [
        "http://geowork.wicp.vip:57757/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:roads&STYLE=&TILEMATRIX=EPSG:4326:{z}&TILEMATRIXSET=EPSG:4326&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"
      ]
    },
    "poi": {
      "type": "vector",
      "scheme": "xyz",
      "zoomOffset": -1,
      "minzoom": 10,
      "tiles": [
        "http://geowork.wicp.vip:57757/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:poi&STYLE=&TILEMATRIX=EPSG:4326:{z}&TILEMATRIXSET=EPSG:4326&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"
      ]
    },
    "citybuilding": {
      "type": "vector",
      "scheme": "xyz",
      "zoomOffset": -1,
      "minzoom": 10,
      "tiles": [
        "http://geowork.wicp.vip:57757/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:building&STYLE=&TILEMATRIX=EPSG:4326:{z}&TILEMATRIXSET=EPSG:4326&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"
      ]
    },
    "arealocation": {
      "type": "geojson",
      "data": {}
    },
    "routinglocation": {
      "type": "geojson",
      "data": {}
    }
  },
  "sprite": "http://61.177.139.232:8088/mapclient/mapbox/sprites/sprite",
  "glyphs": "http://61.177.139.232:8088/mapclient/mapbox/glyphs/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "layout": {"visibility": "visible"},
      "paint": {"background-color": "#FCF9F2"}
    },
    {
      "id": "landuse-residential-4",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_YuanL4_A",
      "minzoom": 14,
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": {
          "base": 1,
          "stops": [
            [12, "hsla(30, 19%, 90%, 0.6)"],
            [20, "hsla(30, 19%, 90%, 0.4)"]
          ]
        },
        "fill-outline-color": "#EEECE7"
      }
    },
    {
      "id": "landuse-residential-3",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_YuanL3_A",
      "minzoom": 14,
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": {
          "base": 1,
          "stops": [
            [12, "hsla(30, 19%, 90%, 0.6)"],
            [20, "hsla(30, 19%, 90%, 0.4)"]
          ]
        },
        "fill-outline-color": "#EEECE7"
      }
    },
    {
      "id": "landuse-residential-2",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_YuanL2_A",
      "minzoom": 14,
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": {
          "base": 1,
          "stops": [
            [12, "hsla(30, 19%, 90%, 0.6)"],
            [20, "hsla(30, 19%, 90%, 0.4)"]
          ]
        },
        "fill-outline-color": "#EEECE7"
      }
    },
    {
      "id": "landuse-residential",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_YuanL1_A",
      "minzoom": 14,
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": {
          "base": 1,
          "stops": [
            [12, "hsla(30, 19%, 90%, 0.6)"],
            [20, "hsla(30, 19%, 90%, 0.4)"]
          ]
        },
        "fill-outline-color": "#EEECE7"
      }
    },
    {
      "id": "landuse-hospital",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_YiLiao_A",
      "minzoom": 13,
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": "#EBD8DE"}
    },
    {
      "id": "landuse-business",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_ShangYe_A",
      "minzoom": 13,
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": "#E9E0ED"}
    },
    {
      "id": "landuse-commercial",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_ShangYe_A",
      "filter": ["all"],
      "layout": {"visibility": "none"},
      "paint": {"fill-color": "hsla(0, 60%, 87%, 0.23)"}
    },
    {
      "id": "landuse-school",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_JiaoYu_A",
      "minzoom": 13,
      "filter": ["all", ["==", "$type", "Polygon"]],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#DCEAF0"}
    },
    
    {
      "id": "green-copy",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "ZB_NLLD_A",
      "minzoom": 0,
      "filter": ["all"],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#CFE8A7"}
    },
    {
      "id": "green",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "ZB_CSLD_A",
      "minzoom": 16,
      "maxzoom": 24,
      "filter": ["all"],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#CFE8A7"}
    },
    {
      "id": "water-lake-2",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "湖泊面",
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": "#ADD2FF"}
    },
    {
      "id": "water-lake-copy",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "SX_HuPo_A",
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": "#ADD2FF"}
    },
    {
      "id": "water-lake",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "池塘面",
      "minzoom": 12,
      "filter": ["all", ["==", "$type", "Polygon"]],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#ADD2FF"}
    },
    {
      "id": "water-river-copy",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "SX_HeLiu_A",
      "minzoom": 8,
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": "#ADD2FF"}
    },
    {
      "id": "water-river",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "河流面",
      "minzoom": 8,
      "filter": ["all", ["==", "$type", "Polygon"], ["!=", "NAME", ""]],
      "paint": {"fill-color": "#ADD2FF"}
    },
    {
      "id": "tunnel-tertiary-2-1-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "乡村路_L",
      "minzoom": 15,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-width": {
          "base": 1.2,
          "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "tunnel-tertiary-2-1",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "乡村路",
      "minzoom": 15,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-width": {
          "base": 1.2,
          "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "tunnel-tertiary-3-1-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "机耕路_L",
      "minzoom": 15,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-width": {
          "base": 1.2,
          "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "tunnel-tertiary-3-1",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "机耕路",
      "minzoom": 15,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-width": {
          "base": 1.2,
          "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "tunnel-tertiary-1-1-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "支路中心线_L",
      "minzoom": 13,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-width": {
          "base": 1.2,
          "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "tunnel-tertiary-1-1",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "支路",
      "minzoom": 13,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-width": {
          "base": 1.2,
          "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "tunnel-tertiary-2-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "乡村路_L",
      "minzoom": 15,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#FFFFFF",
        "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
      }
    },
    {
      "id": "tunnel-tertiary-2",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "乡村路",
      "minzoom": 15,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#FFFFFF",
        "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
      }
    },
    {
      "id": "tunnel-tertiary-3-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "机耕路_L",
      "minzoom": 15,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#FFFFFF",
        "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
      }
    },
    {
      "id": "tunnel-tertiary-3",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "机耕路",
      "minzoom": 15,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#FFFFFF",
        "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
      }
    },
    {
      "id": "tunnel-tertiary-1-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "支路中心线_L",
      "minzoom": 13,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#FFFFFF",
        "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
      }
    },
    {
      "id": "tunnel-tertiary-1",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "支路",
      "minzoom": 13,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#FFFFFF",
        "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
      }
    },
    {
      "id": "tunnel-secondary-casing-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "次干道中心线_L",
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-width": {"base": 1.2, "stops": [[8, 1.5], [20, 17]]}
      }
    },
    {
      "id": "tunnel-secondary-casing",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "次干道",
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-width": {"base": 1.2, "stops": [[8, 1.5], [20, 17]]}
      }
    },
    {
      "id": "tunnel-secondary-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "次干道中心线_L",
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 254, 250, 1)",
        "line-width": {"base": 1.2, "stops": [[6, 0], [8, 0.5], [20, 13]]}
      }
    },
    {
      "id": "tunnel-secondary",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "次干道",
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 254, 250, 1)",
        "line-width": {"base": 1.2, "stops": [[6, 0], [8, 0.5], [20, 13]]}
      }
    },
    {
      "id": "tunnel-town-casing",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "县道",
      "filter": ["all"],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
        }
      }
    },
    {
      "id": "tunnel-main-casing",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "主干道",
      "filter": ["all"],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
        }
      }
    },
    {
      "id": "tunnel-mainline-casing",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "主干道中心线",
      "filter": ["all"],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
        }
      }
    },
    {
      "id": "tunnel-mainline",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "主干道中心线",
      "filter": ["all"],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#fea",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
      }
    },
    {
      "id": "tunnel-town",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "县道",
      "filter": ["all"],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#fea",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
      }
    },
    {
      "id": "tunnel-mian",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "主干道",
      "filter": ["all"],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#fea",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
      }
    },
    {
      "id": "tunnel-motorway-casing-s",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "省道",
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-dasharray": [1],
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 34]]
        }
      }
    },
    {
      "id": "tunnel-motorway-casing",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "国道",
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "rgba(197, 94, 5, 1)",
        "line-dasharray": [1],
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 34]]
        }
      }
    },
    {
      "id": "tunnel-motorway-s",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "省道",
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 30]]}
      }
    },
    {
      "id": "tunnel-motorway",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "国道",
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "rgba(255, 162, 92, 1)",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 30]]}
      }
    },
    {
      "id": "3d-buildings",
      "type": "fill-extrusion",
      "source": "citybuilding",
      "source-layer": "JMD_FangWu_A",
      "minzoom": 16,
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-extrusion-color": "rgba(212, 212, 212, 1)",
        "fill-extrusion-height": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          0,
          15.05,
          ["*", 3, ["get", "Floors"]]
        ],
        "fill-extrusion-base": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          0,
          15.05,
          ["get", "BasementFl"]
        ],
        "fill-extrusion-opacity": 0.5,
        "fill-extrusion-vertical-gradient": false
      }
    },
    {
      "id": "poi-level-copy",
      "type": "symbol",
      "source": "poi",
      "source-layer": "兴趣点",
      "minzoom": 11,
      "maxzoom": 16,
      "filter": [
        "any",
        ["==", "type", "休闲广场"],
        ["==", "type", "体育场馆"],
        ["==", "type", "公园"],
        ["==", "type", "剧院"],
        ["==", "type", "写字楼"],
        ["==", "type", "行政单位"],
        ["==", "type", "长途汽车站"],
        ["==", "type", "火车站"]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{type}",
        "text-field": "{name}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right"
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "rgba(76, 76, 76, 1)",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "poi-level",
      "type": "symbol",
      "source": "poi",
      "source-layer": "兴趣点",
      "minzoom": 16,
      "maxzoom": 24,
      "filter": ["all"],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{type}",
        "text-field": "{name}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 6,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right"
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "rgba(76, 76, 76, 1)",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "poi-level-country-2",
      "type": "symbol",
      "metadata": {"maputnik:comment": "组"},
      "source": "poi",
      "source-layer": "loc_point",
      "minzoom": 13,
      "filter": ["all", ["==", "TYPE", 22202]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{type}",
        "text-field": "{MapName}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 7,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right"
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "rgba(76, 76, 76, 1)",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "poi-level-country",
      "type": "symbol",
      "metadata": {"maputnik:comment": "村"},
      "source": "poi",
      "source-layer": "loc_point",
      "minzoom": 12,
      "filter": ["all", ["==", "TYPE", 22201]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{type}",
        "text-field": "{MapName}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 7,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right"
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "rgba(76, 76, 76, 1)",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "poi-level-towm",
      "type": "symbol",
      "source": "poi",
      "source-layer": "loc_point",
      "minzoom": 10,
      "filter": ["any", ["==", "TYPE", 21500]],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
        "icon-image": "{type}",
        "text-field": "{MapName}",
        "text-offset": [0.6, 0],
        "text-size": 13,
        "text-max-width": 7,
        "visibility": "visible",
        "icon-offset": [6, 0],
        "icon-anchor": "right"
      },
      "paint": {
        "icon-opacity": 1,
        "text-halo-blur": 0.5,
        "text-color": "rgba(76, 76, 76, 1)",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "railway-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "JT_TieLu_L",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": ["all"],
      "paint": {
        "line-color": "rgba(113, 113, 113, 1)",
        "line-width": {"stops": [[15, 3], [16, 5]]}
      }
    },
    {
      "id": "railway-copy-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "JT_TieLu_L",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": ["all"],
      "layout": {"visibility": "visible"},
      "paint": {
        "line-color": "rgba(242, 239, 239, 1)",
        "line-width": {"stops": [[15, 3], [16, 5]]},
        "line-dasharray": [5, 5]
      }
    },
    {
      "id": "bounds-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "block",
      "source-layer": "bounds",
      "minzoom": 0,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(144, 144, 144, 1)",
        "line-width": {"base": 1.2, "stops": [[12, 0.5], [20, 2]]}
      }
    },
    {
      "id": "bounds",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "block",
      "source-layer": "bounds80",
      "minzoom": 0,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(148, 148, 148, 1)",
        "line-width": {"base": 1.2, "stops": [[12, 0.5], [20, 1]]}
      }
    },
    {
      "id": "arealocation-outline",
      "type": "fill",
      "source": "arealocation",
      "filter": ["all", ["==", "NAME", ""]],
      "paint": {
        "fill-color": "#088",
        "fill-opacity": 0.1,
        "fill-outline-color": "#088"
      }
    },
    {
      "id": "routinglocation-line",
      "type": "line",
      "source": "routinglocation",
      "paint": {"line-color": "#4DA9E5", "line-width": 6}
    },
    {
      "id": "label-motorway",
      "type": "symbol",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "国道",
      "filter": ["all"],
      "layout": {
        "visibility": "visible",
        "text-field": "{ROADID}",
        "text-font": ["Microsoft YaHei Regular"],
        "text-size": 8,
        "icon-image": "国道",
        "text-transform": "none",
        "icon-size": 1.4,
        "icon-rotation-alignment": "auto",
        "icon-text-fit": "both",
        "icon-text-fit-padding": [6, 2, 4, 2]
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-translate-anchor": "map"
      }
    },
    {
      "id": "label-shendao",
      "type": "symbol",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "省道",
      "filter": ["all"],
      "layout": {
        "visibility": "visible",
        "text-field": "{ROADID}",
        "text-font": ["Microsoft YaHei Regular"],
        "text-size": 8,
        "icon-image": "省道",
        "text-transform": "none",
        "icon-size": 1.4,
        "icon-rotation-alignment": "auto",
        "icon-text-fit": "both",
        "icon-text-fit-padding": [6, 2, 4, 2],
        "text-ignore-placement": false,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-keep-upright": true
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-translate-anchor": "map"
      }
    }
  ],
  "id": "hrmq9na14"
}