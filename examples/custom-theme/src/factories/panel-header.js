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

import {PanelHeaderFactory, Icons} from '@shitao1988/swsk-kepler-gl/components';
import {GITHUB_BUG_REPORT, GITHUB_USER_GUIDE} from '@shitao1988/swsk-kepler-gl/constants';
import React, {useState} from 'react';

import styled from 'styled-components';
const LogoTitle = styled.div`
  display: inline-block;
  margin-left: 6px;
`;

const LogoName = styled.div`
  .logo__link {
    color: ${props => props.theme.activeColor};
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 1.17px;
  }
`;


const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export function CustomPanelHeaderFactory(...deps) {
  const PanelHeader = PanelHeaderFactory(...deps);
  const defaultActionItems = PanelHeader.defaultProps.actionItems;
  PanelHeader.defaultProps = {
    ...PanelHeader.defaultProps,
    logoComponent:({appName, version}) => (
      <LogoWrapper className="side-panel-logo">
        <LogoTitle className="logo__title">
          <LogoName className="logo__name">
            <a
              className="logo__link"
            >
              空间可视化
            </a>
          </LogoName>
        </LogoTitle>
      </LogoWrapper>
    ),
    actionItems: [
      {
        id: 'docs',
        iconComponent: Icons.Docs,
        href: GITHUB_USER_GUIDE,
        blank: true,
        tooltip: '用户指南',
        onClick: () => {}
      },
      defaultActionItems.find(item => item.id === 'storage'),
      {
        ...defaultActionItems.find(item => item.id === 'save'),
        label: null,
        id: 'save',
        tooltip: '分享'
      }
    ]
  };
  return PanelHeader;
}

CustomPanelHeaderFactory.deps = PanelHeaderFactory.deps;

export function replacePanelHeader() {
  return [PanelHeaderFactory, CustomPanelHeaderFactory];
}
