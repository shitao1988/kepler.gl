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

const mapDarkStyle={
  "version": 8,
  "metadata": {},
  "sources": {
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
    "citybuilding": {
      "type": "vector",
      "scheme": "xyz",
      "zoomOffset": -1,
      "minzoom": 10,
      "tiles": [
        "http://geowork.wicp.vip:57757/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=swsk:building&STYLE=&TILEMATRIX=EPSG:4326:{z}&TILEMATRIXSET=EPSG:4326&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"
      ]
    }
  },
  "sprite": "http://61.177.139.232:8088/mapclient/mapbox/sprites/sprite",
  "glyphs": "http://61.177.139.232:8088/mapclient/mapbox/glyphs/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "layout": {"visibility": "visible"},
      "paint": {"background-color": "#1A232C"}
    },
    {
      "id": "landuse-residential-4",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_YuanL4_A",
      "minzoom": 14,
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#1A232C", "fill-outline-color": "#1A232C"}
    },
    {
      "id": "landuse-residential-3",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_YuanL3_A",
      "minzoom": 14,
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#1A232C", "fill-outline-color": "#1A232C"}
    },
    {
      "id": "landuse-residential-2",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_YuanL2_A",
      "minzoom": 14,
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#1A232C", "fill-outline-color": "#1A232C"}
    },
    {
      "id": "landuse-residential",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_YuanL1_A",
      "minzoom": 14,
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#1A232C", "fill-outline-color": "#1A232C"}
    },
    {
      "id": "landuse-hospital",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_YiLiao_A",
      "minzoom": 13,
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": "#1A232C"}
    },
    {
      "id": "landuse-business",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_ShangYe_A",
      "minzoom": 13,
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": "#1A232C"}
    },
    {
      "id": "landuse-commercial",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "JMD_ShangYe_A",
      "filter": ["all"],
      "layout": {"visibility": "none"},
      "paint": {"fill-color": "#4B5363"}
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
      "paint": {"fill-color": "#1A232C"}
    },
    {
      "id": "3d-buildings",
      "type": "fill-extrusion",
      "source": "citybuilding",
      "source-layer": "JMD_FangWu_A",
      "minzoom": 16,
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-extrusion-color": "#252F38",
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
      "id": "green-copy",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "ZB_NLLD_A",
      "filter": ["all"],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#222D37"}
    },
    {
      "id": "green",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "ZB_CSLD_A",
      "filter": ["all"],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "#222D37"}
    },
    {
      "id": "water-river-copy",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "SX_HeLiu_A",
      "minzoom": 8,
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": "#0A141C"}
    },
    {
      "id": "water-lake-2",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "湖泊面",
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": "#0A141C"}
    },
    {
      "id": "water-lake-copy",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "SX_HuPo_A",
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": "#0A141C"}
    },
    {
      "id": "water-lake",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "池塘面",
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": "#0A141C"}
    },
    {
      "id": "water-river",
      "type": "fill",
      "metadata": {"mapbox:group": "1444849388993.3071"},
      "source": "block",
      "source-layer": "河流面",
      "minzoom": 8,
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": "#0A141C"}
    },
    {
      "id": "tunnel-tertiary-2-1-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "乡村路_L",
      "minzoom": 13,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#060D16",
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
      "minzoom": 13,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#060D16",
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
      "minzoom": 13,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#060D16",
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
      "minzoom": 13,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#060D16",
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
        "line-color": "#060D16",
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
        "line-color": "#060D16",
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
      "minzoom": 13,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#060D16",
        "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
      }
    },
    {
      "id": "tunnel-tertiary-2",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "乡村路",
      "minzoom": 13,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#060D16",
        "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
      }
    },
    {
      "id": "tunnel-tertiary-3-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "机耕路_L",
      "minzoom": 13,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#060D16",
        "line-width": {"base": 1.2, "stops": [[13, 0], [14, 2.5], [20, 11.5]]}
      }
    },
    {
      "id": "tunnel-tertiary-3",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "机耕路",
      "minzoom": 13,
      "filter": ["all"],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#060D16",
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
        "line-color": "#060D16",
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
        "line-color": "#060D16",
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
        "line-color": "#060D16",
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
        "line-color": "#060D16",
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
        "line-color": "#060D16",
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
        "line-color": "#060D16",
        "line-width": {"base": 1.2, "stops": [[6, 0], [8, 0.5], [20, 13]]}
      }
    },
    {
      "id": "tunnel-trunk-primary-casing-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "主干道",
      "filter": ["all"],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#060D16",
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
        }
      }
    },
    {
      "id": "tunnel-trunk-primary-casing",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "主干道中心线",
      "filter": ["all"],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#060D16",
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
        }
      }
    },
    {
      "id": "tunnel-trunk-primary-copy",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "主干道中心线",
      "filter": ["all"],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#060D16",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
      }
    },
    {
      "id": "tunnel-trunk-primary",
      "type": "line",
      "metadata": {"mapbox:group": "1444849354174.1904"},
      "source": "roads",
      "source-layer": "主干道",
      "filter": ["all"],
      "layout": {"line-join": "round", "visibility": "visible"},
      "paint": {
        "line-color": "#060D16",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
      }
    },
    {
      "id": "tunnel-motorway-casing",
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
        "line-color": "#060D16",
        "line-dasharray": [1],
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 34]]
        }
      }
    },
    {
      "id": "tunnel-motorway",
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
        "line-color": "#060D16",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 30]]}
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
        "line-color": "#023E4D",
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
        "line-color": "#015058",
        "line-width": {"stops": [[15, 3], [16, 5]]},
        "line-dasharray": [5, 5]
      }
    },
    {
      "id": "poi-level",
      "type": "symbol",
      "source": "poi",
      "source-layer": "兴趣点",
      "minzoom": 11,
      "filter": ["all"],
      "layout": {
        "text-padding": 2,
        "text-font": ["Microsoft YaHei Regular"],
        "text-anchor": "left",
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
        "text-color": "#a0a8b8",
        "text-halo-width": 1,
        "text-halo-color": "#0A141C"
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
        "line-color": "#015058",
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
        "line-color": "#015058",
        "line-width": {"base": 1.2, "stops": [[12, 0.5], [20, 1]]}
      }
    },
    {
      "id": "arealocation-outline",
      "source": "arealocation",
      "type": "fill",
      "filter": ["all", ["==", "NAME", ""]],
      "paint": {
          "fill-color": "#088",
          "fill-opacity": 0.1,
          "fill-outline-color": "#088"
          }
    },{
      "id": "routinglocation-line",
      "type": "line",
      "source": "routinglocation",
      "paint": {"line-color": "#4DA9E5", "line-width": 6}
    }
  ],
  "id": "hrmq9na14"
}