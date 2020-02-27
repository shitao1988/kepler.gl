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
import styled from 'styled-components';
import ImagePreview from 'components/common/image-preview';

import {EXPORT_IMG_RATIO_OPTIONS, EXPORT_IMG_RESOLUTION_OPTIONS} from 'constants/default-settings';

import {StyledModalContent, SelectionButton} from 'components/common/styled-components';
import Switch from 'components/common/switch';

const ImageOptionList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 250px;

  .image-option-section {
    .image-option-section-title {
      font-weight: 500;
      font-size: 14px;
    }
  }

  .button-list {
    display: flex;
    flex-direction: row;
    padding: 8px 0px;
  }

  input {
    margin-right: 8px;
  }
`;

const ExportImageModalFactory = () => {
  class ExportImageModal extends Component {
    static propTypes = {
      mapW: PropTypes.number.isRequired,
      mapH: PropTypes.number.isRequired,
      exportImage: PropTypes.object.isRequired,
      // callbacks
      onUpdateSetting: PropTypes.func.isRequired
    };

    componentDidMount() {
      this._updateMapDim();
    }

    componentDidUpdate() {
      this._updateMapDim();
    }

    _updateMapDim() {
      const {exportImage, mapH, mapW} = this.props;
      if (mapH !== exportImage.mapH || mapW !== exportImage.mapW) {
        this.props.onUpdateSetting({mapH, mapW});
      }
    }

    render() {
      const {exportImage, onUpdateSetting} = this.props;
      const {legend, ratio, resolution} = exportImage;

      return (
        <StyledModalContent className="export-image-modal">
          <ImageOptionList>
            <div className="image-option-section">
              <div className="image-option-section-title">比例</div>
              选择比例
              <div className="button-list">
                {EXPORT_IMG_RATIO_OPTIONS.filter(op => !op.hidden).map(op => (
                  <SelectionButton
                    key={op.id}
                    selected={ratio === op.id}
                    onClick={() => onUpdateSetting({ratio: op.id})}
                  >
                    {op.label}
                  </SelectionButton>
                ))}
              </div>
            </div>
            <div className="image-option-section">
              <div className="image-option-section-title">分辨率</div>
              适合打印的高分辨率
              <div className="button-list">
                {EXPORT_IMG_RESOLUTION_OPTIONS.map(op => (
                  <SelectionButton
                    key={op.id}
                    selected={resolution === op.id}
                    onClick={() => op.available && onUpdateSetting({resolution: op.id})}
                  >
                    {op.label}
                  </SelectionButton>
                ))}
              </div>
            </div>
            <div className="image-option-section">
              <div className="image-option-section-title">图例</div>
              <Switch
                type="checkbox"
                id="add-map-legend"
                checked={legend}
                label="添加图例到地图"
                onChange={() => onUpdateSetting({legend: !legend})}
              />
            </div>
          </ImageOptionList>
          <ImagePreview exportImage={exportImage} />
        </StyledModalContent>
      );
    }
  }

  return ExportImageModal;
};

export default ExportImageModalFactory;
