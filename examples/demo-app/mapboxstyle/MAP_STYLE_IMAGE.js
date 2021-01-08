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

const imageStyle = {
  version: 8,
  sources: {
    img_c: {
      type: "raster",
      tiles: [
        "http://t0.tianditu.gov.cn/DataServer?T=img_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94",
      ],
      tileSize: 256,
    },
    cia_c: {
      type: "raster",
      tiles: [
        "http://t0.tianditu.gov.cn/DataServer?T=cia_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94",
      ],
      tileSize: 256,
    },
    vec_c: {
      type: "raster",
      tiles: [
        "http://t0.tianditu.gov.cn/DataServer?T=vec_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94",
      ],
      tileSize: 256,
    },
    cva_c: {
      type: "raster",
      tiles: [
        "http://t0.tianditu.gov.cn/DataServer?T=cva_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94",
      ],
      tileSize: 256,
    },
    wuxi_newvector: {
      type: "raster",
      tiles: [
        "http://61.177.139.228:9000/gateway/WMTSServer/wuxi_newvector?service=WMTS&request=GetTile&tilematrix={z}&tilerow={y}&tilecol={x}",
      ],
      tileSize: 256,
    },
    wuxi_newvectoranno: {
      type: "raster",
      tiles: [
        "http://61.177.139.228:9000/gateway/WMTSServer/wuxi_newvectoranno?service=WMTS&request=GetTile&tilematrix={z}&tilerow={y}&tilecol={x}",
      ],
      tileSize: 256,
    },
    wuxi_image: {
      type: "raster",
      tiles: [
        "http://61.177.139.228:9000/gateway/WMTSServer/wuxi_image?service=WMTS&request=GetTile&tilematrix={z}&tilerow={y}&tilecol={x}",
      ],
      tileSize: 256,
    },
    wuxi_imageanno: {
      type: "raster",
      tiles: [
        "http://61.177.139.228:9000/gateway/WMTSServer/wuxi_imageanno?service=WMTS&request=GetTile&tilematrix={z}&tilerow={y}&tilecol={x}",
      ],
      tileSize: 256,
    },
    
    arealocation: {
      type: "geojson",
      data: {},
    },
    routinglocation: {
      type: "geojson",
      data: {},
    },
  },
  layers: [
    {
      id: "img_c",
      type: "raster",
      source: "img_c",
      minzoom: 0,
      maxzoom: 17.5,
    },
    {
      id: "cia_c",
      type: "raster",
      source: "cia_c",
      minzoom: 0,
      maxzoom: 17.5,
    },
    {
      id: "wuxi_image",
      type: "raster",
      source: "wuxi_image",
      minzoom: 17.5,
      maxzoom: 19.5,
    },
    {
      id: "wuxi_imageanno",
      type: "raster",
      source: "wuxi_imageanno",
      minzoom: 17.5,
      maxzoom: 19.5,
    },
    {
      id: "arealocation-outline",
      source: "arealocation",
      type: "fill",
      filter: ["all", ["==", "NAME", ""]],
      paint: {
        "fill-color": "rgba(97, 87, 204, 0.1)",
        "fill-opacity": 1,
        "fill-outline-color": "rgb(97, 87, 204)"
      },
    },
    {
      id: "routinglocation-line",
      type: "line",
      source: "routinglocation",
      paint: { "line-color": "#4DA9E5", "line-width": 6 },
    },
  ],
};

const roadStyle = {
  version: 8,
  sources: {
    img_c: {
      type: "raster",
      tiles: [
        "http://t0.tianditu.gov.cn/DataServer?T=img_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94",
      ],
      tileSize: 256,
    },
    cia_c: {
      type: "raster",
      tiles: [
        "http://t0.tianditu.gov.cn/DataServer?T=cia_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94",
      ],
      tileSize: 256,
    },
    vec_c: {
      type: "raster",
      tiles: [
        "http://t0.tianditu.gov.cn/DataServer?T=vec_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94",
      ],
      tileSize: 256,
    },
    cva_c: {
      type: "raster",
      tiles: [
        "http://t0.tianditu.gov.cn/DataServer?T=cva_c&x={x}&y={y}&l={z}&tk=56e2ef8967b3a0dbb746b7a40b7faa94",
      ],
      tileSize: 256,
    },
    wuxi_newvector: {
      type: "raster",
      tiles: [
        "http://61.177.139.228:9000/gateway/WMTSServer/wuxi_newvector?service=WMTS&request=GetTile&tilematrix={z}&tilerow={y}&tilecol={x}",
      ],
      tileSize: 256,
    },
    wuxi_newvectoranno: {
      type: "raster",
      tiles: [
        "http://61.177.139.228:9000/gateway/WMTSServer/wuxi_newvectoranno?service=WMTS&request=GetTile&tilematrix={z}&tilerow={y}&tilecol={x}",
      ],
      tileSize: 256,
    },
    wuxi_image: {
      type: "raster",
      tiles: [
        "http://61.177.139.228:9000/gateway/WMTSServer/wuxi_image?service=WMTS&request=GetTile&tilematrix={z}&tilerow={y}&tilecol={x}",
      ],
      tileSize: 256,
    },
    wuxi_imageanno: {
      type: "raster",
      tiles: [
        "http://61.177.139.228:9000/gateway/WMTSServer/wuxi_imageanno?service=WMTS&request=GetTile&tilematrix={z}&tilerow={y}&tilecol={x}",
      ],
      tileSize: 256,
    },
    arealocation: {
      type: "geojson",
      data: {},
    },
    routinglocation: {
      type: "geojson",
      data: {},
    },
  },
  sprite: "http://61.177.139.232:8088/mapclient/mapbox/sprites/sprite",
  glyphs:
    "http://61.177.139.232:8088/mapclient/mapbox/glyphs/{fontstack}/{range}.pbf",
  layers: [
    {
      id: "vec_c",
      type: "raster",
      source: "vec_c",
      minzoom: 0,
      maxzoom: 17.5,
    },
    {
      id: "cva_c",
      type: "raster",
      source: "cva_c",
      minzoom: 0,
      maxzoom: 17.5,
    },
    {
      id: "wuxi_newvector",
      type: "raster",
      source: "wuxi_newvector",
      minzoom: 17.5,
      maxzoom: 19.5,
    },
    {
      id: "wuxi_newvectoranno",
      type: "raster",
      source: "wuxi_newvectoranno",
      minzoom: 17.5,
      maxzoom: 19.5,
    },
    {
      id: "arealocation-outline",
      source: "arealocation",
      type: "fill",
      filter: ["all", ["==", "NAME", ""]],
      paint: {
        "fill-color": "rgba(97, 87, 204, 0.1)",
        "fill-opacity": 1,
        "fill-outline-color": "rgb(97, 87, 204)"
      },
    },
    {
      id: "routinglocation-line",
      type: "line",
      source: "routinglocation",
      paint: { "line-color": "#4DA9E5", "line-width": 6 },
    },
  ],
};
