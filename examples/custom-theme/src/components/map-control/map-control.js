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

import React, {useState} from 'react';
import styled from 'styled-components';
import {MapControlFactory, Tooltip, MapControlButton} from '@shitao1988/swsk-kepler-gl/components';
import ThemeIcon from '../icons/theme-icon'


const MapControl = MapControlFactory();

const StyledMapControlOverlay = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
`;

const StyledFloatingPanel = styled.div`
  margin-right: 12px;
  margin-top: 20px;
`;

const MapControlTooltip = React.memo(({id, message}) => (
  <Tooltip id={id} place="left" effect="solid">
    <span>{message}</span>
  </Tooltip>
));

MapControlTooltip.displayName = 'MapControlTooltip';


const ToggleThemeButton = React.memo(({theme, onToggleTheme}) => (
  <MapControlButton
    onClick={e => {
      e.preventDefault();
      onToggleTheme();
    }}
    active={theme==='black'}
    data-tip
    data-for="action-theme"
  >
    <ThemeIcon height="50px" />
    <MapControlTooltip
      id="action-theme"
      message={theme==='black' ? '切换亮主题' : '切换暗主题'}
    />
  </MapControlButton>
));

ToggleThemeButton.displayName = 'ToggleThemeButton';




function CustomMapPanel(props) {
  return (
    <StyledFloatingPanel>
       <ToggleThemeButton theme={props.theme} onToggleTheme={props.onToggleTheme} />
    </StyledFloatingPanel>
  );
}

const CustomMapControl = props => (
  <StyledMapControlOverlay>
    <CustomMapPanel {...props} />
    <MapControl {...props} />
  </StyledMapControlOverlay>
);

export default CustomMapControl;
