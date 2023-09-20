'use client';

import 'normalize.css';
import '../../../styles/site/index.scss';
import './box-model.scss';

import MainLayout from 'apps/fewd/components/main-layout';
import { memo, useReducer } from 'react';
import styled from 'styled-components';

const StyledMainLayout = styled(MainLayout)``;

interface State {
  boxSizing: 'content-box' | 'border-box';
  width: number;
}

const px = (value: number) => `${value}px`;

type Action =
  | {
      type: 'set-box-sizing';
      payload: State['boxSizing'];
    }
  | {
      type: 'set-width';
      payload: State['width'];
    };

const initialState: State = {
  boxSizing: 'content-box',
  width: 200,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'set-box-sizing':
      return { ...state, boxSizing: action.payload };

    case 'set-width':
      return { ...state, width: action.payload };

    default:
      throw new Error(`${action} is not a valid action type}`);
  }
};

async function Index() {
  const [{ boxSizing, width }, dispatch] = useReducer(reducer, initialState);

  console.log({ boxSizing, width });

  return (
    <StyledMainLayout>
      <h1>Interactive box-model demo</h1>
      <p>
        Adjust the sliders to see how the box changes and generates the
        necessary code.
      </p>
      <div className="row">
        <article>
          <div
            className="box"
            style={{
              top: '56px',
              left: '50px',
              width: '200px',
              height: '200px',
            }}
          >
            <div
              className="box-margin box-property"
              data-property="margin"
              style={{
                width: '300px',
                height: '300px',
                top: '-50px',
                left: '-50px',
              }}
            >
              <span
                className="box-property-vertical"
                data-top="20"
                data-bottom="20"
              />
              <span
                className="box-property-horizontal"
                data-left="20"
                data-right="20"
              />
            </div>
            <div
              className="box-border box-property"
              data-property="border"
              style={{
                width: '260px',
                height: '260px',
                top: '-30px',
                left: '-30px',
              }}
            >
              <span
                className="box-property-vertical"
                data-top="10"
                data-bottom="10"
              />
              <span
                className="box-property-horizontal"
                data-left="10"
                data-right="10"
              />
            </div>
            <div
              className="box-padding box-property"
              data-property="padding"
              style={{
                width: '242px',
                height: '242px',
                top: '-20px',
                left: '-20px',
              }}
            >
              <span
                className="box-property-vertical"
                data-top="20"
                data-bottom="20"
              />
              <span
                className="box-property-horizontal"
                data-left="20"
                data-right="20"
              />
            </div>
            <div
              className="box-inner box-property"
              data-property="content"
              style={{ width: px(width), height: '200px' }}
              data-width={width}
              data-height="200"
              data-hover-property="content"
            >
              <span className="box-property-vertical" />
              <span className="box-property-horizontal" />
            </div>
          </div>
        </article>
        <aside className="box-controls">
          <fieldset className="box-link-properties">
            <label htmlFor="contentBox">content-box</label>
            <input
              type="radio"
              name="boxSizing[]"
              id="contentBox"
              onChange={() => {
                dispatch({
                  type: 'set-box-sizing',
                  payload: 'content-box',
                });
              }}
              checked={boxSizing === 'content-box'}
            />
            <label htmlFor="borderBox">border-box</label>
            <input
              type="radio"
              name="boxSizing[]"
              id="borderBox"
              onChange={(event) => {
                dispatch({
                  type: 'set-box-sizing',
                  payload: 'border-box',
                });
              }}
              checked={boxSizing === 'border-box'}
            />
          </fieldset>

          <fieldset>
            <legend>Dimensions</legend>

            <label htmlFor="boxWidth">Width:</label>
            <input
              type="range"
              min="0"
              max="500"
              name="boxWidth"
              id="boxWidth"
              value={width}
              step="5"
              onChange={(event) => {
                event.preventDefault();
                dispatch({
                  type: 'set-width',
                  payload: Number((event.target as HTMLInputElement).value),
                });
              }}
            />
            <label htmlFor="boxWidth">Height:</label>
            {/* <input
              type="range"
              min="0"
              max="500"
              name="boxHeight"
              id="boxHeight"
              value="200"
              step="5"
            /> */}
          </fieldset>

          {/* <fieldset>
              <legend>Padding</legend>

              <fieldset className="box-link-properties">
                <label htmlFor="linkPaddingNone">Link None</label>
                <input
                  type="radio"
                  name="linkPadding[]"
                  id="linkPaddingNone"
                  checked
                />
                <label htmlFor="linkPaddingTopBottom">Link T/B</label>
                <input
                  type="radio"
                  name="linkPadding[]"
                  id="linkPaddingTopBottom"
                />
                <label htmlFor="linkPaddingRightLeft">Link R/L</label>
                <input
                  type="radio"
                  name="linkPadding[]"
                  id="linkPaddingRightLeft"
                />
                <label htmlFor="linkPaddingAll">All</label>
                <input type="radio" name="linkPadding[]" id="linkPaddingAll" />
              </fieldset>
              <label htmlFor="boxPaddingTop">Padding Top:</label>
              <input
                type="range"
                min="0"
                max="100"
                name="boxPaddingTop"
                id="boxPaddingTop"
                value="20"
                step="5"
              />
              <label htmlFor="boxPaddingRight">Padding Right:</label>
              <input
                type="range"
                min="0"
                max="100"
                name="boxPaddingRight"
                id="boxPaddingRight"
                value="20"
                step="5"
              />
              <label htmlFor="boxPaddingBottom">Padding Bottom:</label>
              <input
                type="range"
                min="0"
                max="100"
                name="boxPaddingBottom"
                id="boxPaddingBottom"
                value="20"
                step="5"
              />
              <label htmlFor="boxPaddingLeft">Padding Left:</label>
              <input
                type="range"
                min="0"
                max="100"
                name="boxPaddingLeft"
                id="boxPaddingLeft"
                value="20"
                step="5"
              />
            </fieldset> */}

          {/* <fieldset>
              <legend>Margin</legend>

              <fieldset className="box-link-properties">
                <label htmlFor="linkMarginNone">Link None</label>
                <input
                  type="radio"
                  name="linkMargin[]"
                  id="linkMarginNone"
                  checked
                />
                <label htmlFor="linkMarginTopBottom">Link T/B</label>
                <input
                  type="radio"
                  name="linkMargin[]"
                  id="linkMarginTopBottom"
                />
                <label htmlFor="linkMarginRightLeft">Link R/L</label>
                <input
                  type="radio"
                  name="linkMargin[]"
                  id="linkMarginRightLeft"
                />
                <label htmlFor="linkMarginAll">All</label>
                <input type="radio" name="linkMargin[]" id="linkMarginAll" />
              </fieldset>

              <label htmlFor="boxMarginTop">Margin Top:</label>
              <input
                type="range"
                min="0"
                max="100"
                name="boxMarginTop"
                id="boxMarginTop"
                value="20"
                step="5"
              />
              <label htmlFor="boxMarginRight">Margin Right:</label>
              <input
                type="range"
                min="0"
                max="100"
                name="boxMarginRight"
                id="boxMarginRight"
                value="20"
                step="5"
              />
              <label htmlFor="boxMarginBottom">Margin Bottom:</label>
              <input
                type="range"
                min="0"
                max="100"
                name="boxMarginBottom"
                id="boxMarginBottom"
                value="20"
                step="5"
              />
              <label htmlFor="boxMarginLeft">Margin Left:</label>
              <input
                type="range"
                min="0"
                max="100"
                name="boxMarginLeft"
                id="boxMarginLeft"
                value="20"
                step="5"
              />
            </fieldset> */}

          {/* <fieldset>
              <legend>Border</legend>

              <fieldset className="box-link-properties">
                <label htmlFor="linkBorderNone">Link None</label>
                <input
                  type="radio"
                  name="linkBorder[]"
                  id="linkBorderNone"
                  checked
                />
                <label htmlFor="linkBorderTopBottom">Link T/B</label>
                <input
                  type="radio"
                  name="linkBorder[]"
                  id="linkBorderTopBottom"
                />
                <label htmlFor="linkBorderRightLeft">Link R/L</label>
                <input
                  type="radio"
                  name="linkBorder[]"
                  id="linkBorderRightLeft"
                />
                <label htmlFor="linkBorderAll">All</label>
                <input type="radio" name="linkBorder[]" id="linkBorderAll" />
              </fieldset>

              <label htmlFor="boxBorderTop">Border Top:</label>
              <input
                type="range"
                min="0"
                max="50"
                name="boxBorderTop"
                id="boxBorderTop"
                value="10"
                step="5"
              />
              <label htmlFor="boxBorderRight">Border Right:</label>
              <input
                type="range"
                min="0"
                max="50"
                name="boxBorderRight"
                id="boxBorderRight"
                value="10"
                step="5"
              />
              <label htmlFor="boxBorderBottom">Border Bottom:</label>
              <input
                type="range"
                min="0"
                max="50"
                name="boxBorderBottom"
                id="boxBorderBottom"
                value="10"
                step="5"
              />
              <label htmlFor="boxBorderLeft">Border Left:</label>
              <input
                type="range"
                min="0"
                max="50"
                name="boxBorderLeft"
                id="boxBorderLeft"
                value="10"
                step="5"
              />
            </fieldset> */}
        </aside>
      </div>
    </StyledMainLayout>
  );
}

export default memo(Index);
