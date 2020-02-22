

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
