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

import {PendingXHR} from 'pending-xhr-puppeteer';
import {
  detectModalClosing,
  FILE_PATH,
  FILE_INPUT_IDENTIFIER,
  takeScreenshot
} from './utils';

const TIMEOUT = 10000;

beforeAll(async () => {
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Load File and Filters', () => {
  const confirmButtonClassname = '.confirm-button';

  const pendingXHR = new PendingXHR(page);

  test('Load file', async () => {

    await page.waitForSelector(FILE_INPUT_IDENTIFIER);

    // get the ElementHandle of the selector above
    const inputUploadHandle = await page.$(FILE_INPUT_IDENTIFIER);
    inputUploadHandle.uploadFile(FILE_PATH);

    await detectModalClosing();

    await pendingXHR.waitForAllXhrFinished();

    await page.waitFor(2500);

    await takeScreenshot();
  }, TIMEOUT);

  test('Export Image', async () => {
    const dataSelector = '.export-image';

    await page.click('div[data-for="save-action"]');

    await page.waitForSelector(dataSelector);

    await page.click(dataSelector);

    await page.waitForSelector('.preview-image-placeholder');

    await takeScreenshot();

    await page.click(confirmButtonClassname);

    await detectModalClosing();
  }, TIMEOUT);

  test('Export Data - Filtered', async () => {
    const dataSelector = '.export-data';
    await page.click('div[data-for="save-action"]');

    await page.waitForSelector(dataSelector);

    await page.click(dataSelector);

    await takeScreenshot();

    await page.click(confirmButtonClassname);

    await detectModalClosing();
  }, TIMEOUT);

  test('Export Data - Unfiltered', async () => {
    const dataSelector = '.export-data';
    await page.click('div[data-for="save-action"]');

    await page.waitForSelector(dataSelector);

    await page.click(dataSelector);

    await page.click('.unfiltered-option');

    await takeScreenshot();

    await page.click(confirmButtonClassname);

    await detectModalClosing();
  }, TIMEOUT);

  test('Show Legend', async () => {
    await page.click('.show-legend.map-control-button');

    await page.waitForSelector('.map-legend');

    await takeScreenshot();

    await page.click('.close-map-control-item');

    await takeScreenshot();
  }, TIMEOUT);

  test('Split Map', async () => {
    const splitMapButton = '.split-map.map-control-button';
    const closeSplitMapButton = '.split-map.close-map.map-control-button';

    await page.click(splitMapButton);

    await page.waitForSelector(closeSplitMapButton);

    // wait for second map to load tiles
    await page.waitFor(2500);

    await takeScreenshot();

    await page.click('.split-map.close-map.map-control-button');

    await page.waitForSelector(splitMapButton);

    await takeScreenshot();
  }, TIMEOUT);

  test('Create Geo-Filter', async () => {
    await page.click('div[data-for="map-draw"]');

    await page.waitForSelector('.map-draw-controls');

    await page.click('.map-draw-controls__draw-rectangle');

    // top-left
    await page.mouse.click(676, 268, { button: 'left' });

    // bottom-right
    await page.mouse.click(970, 485, { button: 'left' });

    // right click
    await page.mouse.click(850, 350, { button: 'right' });

    // hover layers item
    await page.hover('.editor-layers-list');

    // hover first layer
    await page.hover('.editor-layers-list .layer-panel-item');

    // click first layer
    await page.click('.editor-layers-list .layer-panel-item');

    // click outside polygon
    await page.mouse.click(600, 485, { button: 'left' });

    await takeScreenshot();

    await detectModalClosing();
  });
});
