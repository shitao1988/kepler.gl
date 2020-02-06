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

import path from "path";

export const FILE_PATH = path.join(__dirname, '../fixtures/csvall.csv');
export const FILE_INPUT_IDENTIFIER = '.file-dialog-input';

export const takeScreenshot = async (options = {
  failureThreshold: 1.00,
  failureThresholdType: 'percent'
}) => {
  const image = await page.screenshot(options);
  expect(image).toMatchImageSnapshot();
};

export const detectModalClosing = () => page.waitFor(() =>
  !document.querySelector('.modal--wrapper')
);

export const setupTest = async page => {
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto(URL, {waitUntil: 'domcontentloaded'});
};
