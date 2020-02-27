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



import React, {Component} from 'react';
import PropTypes from 'prop-types';


import FieldSelector from 'components/common/field-selector';
import LayerConfigGroup, {
  StyledConfigGroupHeader
} from './layer-config-group';


export default class ChartColumnPanel extends Component {
  static propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object),
    ChartColumns: PropTypes.arrayOf(PropTypes.object),
    updateLayerChartColumns: PropTypes.func.isRequired
  };

  render() {
    const {updateLayerChartColumns, chartColumns, fields} = this.props;
    const currentFields = chartColumns.map(tl => tl.field && tl.field.name).filter(d => d);
    return (
      <LayerConfigGroup label={'指标'} >
        <StyledConfigGroupHeader>
          <FieldSelector
            fields={fields}
            value={currentFields}
            onSelect={selected => updateLayerChartColumns('all', 'fields', selected)}
            multiSelect
          />
        </StyledConfigGroupHeader>
      </LayerConfigGroup>
    );
  }
}
