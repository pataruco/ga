import './style.scss';

import { useReducer } from 'react';

type PropertyLink = 'none' | 'top-bottom' | 'right-left' | 'all';

interface State {
  boxSizing: 'content-box' | 'border-box';
  width: number;
  height: number;
  paddingPropertyLink: PropertyLink;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  marginPropertyLink: PropertyLink;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
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
    }
  | {
      type: 'set-height';
      payload: State['height'];
    }
  | {
      type: 'set-padding-property-link';
      payload: State['paddingPropertyLink'];
    }
  | {
      type: 'set-padding-top';
      payload: State['paddingTop'];
    }
  | {
      type: 'set-padding-right';
      payload: State['paddingRight'];
    }
  | {
      type: 'set-padding-bottom';
      payload: State['paddingBottom'];
    }
  | {
      type: 'set-padding-left';
      payload: State['paddingLeft'];
    }
  | {
      type: 'set-margin-property-link';
      payload: State['marginPropertyLink'];
    }
  | {
      type: 'set-margin-top';
      payload: State['marginTop'];
    }
  | {
      type: 'set-margin-right';
      payload: State['marginRight'];
    }
  | { type: 'set-margin-bottom'; payload: State['marginBottom'] }
  | { type: 'set-margin-left'; payload: State['marginLeft'] };

const initialState: State = {
  boxSizing: 'content-box',
  width: 200,
  height: 200,
  paddingPropertyLink: 'none',
  paddingTop: 20,
  paddingRight: 20,
  paddingBottom: 20,
  paddingLeft: 20,
  marginPropertyLink: 'none',
  marginTop: 20,
  marginRight: 20,
  marginBottom: 20,
  marginLeft: 20,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'set-box-sizing':
      return { ...state, boxSizing: action.payload };

    case 'set-width':
      return { ...state, width: action.payload };

    case 'set-height':
      return { ...state, height: action.payload };

    case 'set-padding-property-link':
      return { ...state, paddingPropertyLink: action.payload };

    case 'set-padding-top':
      return { ...state, paddingTop: action.payload };

    case 'set-padding-right':
      return { ...state, paddingRight: action.payload };

    case 'set-padding-bottom':
      return { ...state, paddingBottom: action.payload };

    case 'set-padding-left':
      return { ...state, paddingLeft: action.payload };

    case 'set-margin-property-link':
      return { ...state, marginPropertyLink: action.payload };

    case 'set-margin-top':
      return { ...state, marginTop: action.payload };

    case 'set-margin-right':
      return { ...state, marginRight: action.payload };

    case 'set-margin-bottom':
      return { ...state, marginBottom: action.payload };

    case 'set-margin-left':
      return { ...state, marginLeft: action.payload };

    default:
      throw new Error(`${action} is not a valid action type}`);
  }
};

async function BoxModel() {
  const [
    {
      boxSizing,
      height,
      marginBottom,
      marginLeft,
      marginPropertyLink,
      marginRight,
      marginTop,
      paddingBottom,
      paddingLeft,
      paddingPropertyLink,
      paddingRight,
      paddingTop,
      width,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  console.table({
    boxSizing,
    height,
    marginBottom,
    marginLeft,
    marginPropertyLink,
    marginRight,
    marginTop,
    paddingBottom,
    paddingLeft,
    paddingPropertyLink,
    paddingRight,
    paddingTop,
    width,
  });

  return (
    <>
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
                dispatch({
                  type: 'set-width',
                  payload: Number((event.target as HTMLInputElement).value),
                });
              }}
            />
            <label htmlFor="boxWidth">Height:</label>
            <input
              type="range"
              min="0"
              max="500"
              name="boxHeight"
              id="boxHeight"
              value={height}
              step="5"
              onChange={(event) => {
                event.preventDefault();
                dispatch({
                  type: 'set-height',
                  payload: Number((event.target as HTMLInputElement).value),
                });
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Padding</legend>

            <fieldset className="box-link-properties">
              <label htmlFor="linkPaddingNone">Link None</label>
              <input
                type="radio"
                name="linkPadding[]"
                id="linkPaddingNone"
                checked={paddingPropertyLink === 'none'}
                onChange={() => {
                  dispatch({
                    type: 'set-padding-property-link',
                    payload: 'none',
                  });
                }}
              />
              <label htmlFor="linkPaddingTopBottom">Link T/B</label>
              <input
                type="radio"
                name="linkPadding[]"
                id="linkPaddingTopBottom"
                checked={paddingPropertyLink === 'top-bottom'}
                onChange={() => {
                  dispatch({
                    type: 'set-padding-property-link',
                    payload: 'top-bottom',
                  });
                }}
              />
              <label htmlFor="linkPaddingRightLeft">Link R/L</label>
              <input
                type="radio"
                name="linkPadding[]"
                id="linkPaddingRightLeft"
                checked={paddingPropertyLink === 'right-left'}
                onChange={() => {
                  dispatch({
                    type: 'set-padding-property-link',
                    payload: 'right-left',
                  });
                }}
              />
              <label htmlFor="linkPaddingAll">All</label>
              <input
                type="radio"
                name="linkPadding[]"
                id="linkPaddingAll"
                checked={paddingPropertyLink === 'all'}
                onChange={() => {
                  dispatch({
                    type: 'set-padding-property-link',
                    payload: 'all',
                  });
                }}
              />
            </fieldset>
            <label htmlFor="boxPaddingTop">Padding Top:</label>
            <input
              type="range"
              min="0"
              max="100"
              name="boxPaddingTop"
              id="boxPaddingTop"
              value={paddingTop}
              step="5"
              onChange={(event) => {
                dispatch({
                  type: 'set-padding-top',
                  payload: Number((event.target as HTMLInputElement).value),
                });
              }}
            />
            <label htmlFor="boxPaddingRight">Padding Right:</label>
            <input
              type="range"
              min="0"
              max="100"
              name="boxPaddingRight"
              id="boxPaddingRight"
              value={paddingRight}
              step="5"
              onChange={(event) => {
                dispatch({
                  type: 'set-padding-right',
                  payload: Number((event.target as HTMLInputElement).value),
                });
              }}
            />
            <label htmlFor="boxPaddingBottom">Padding Bottom:</label>
            <input
              type="range"
              min="0"
              max="100"
              name="boxPaddingBottom"
              id="boxPaddingBottom"
              value={paddingBottom}
              step="5"
              onChange={(event) => {
                dispatch({
                  type: 'set-padding-bottom',
                  payload: Number((event.target as HTMLInputElement).value),
                });
              }}
            />
            <label htmlFor="boxPaddingLeft">Padding Left:</label>
            <input
              type="range"
              min="0"
              max="100"
              name="boxPaddingLeft"
              id="boxPaddingLeft"
              value={paddingLeft}
              step="5"
              onChange={(event) => {
                dispatch({
                  type: 'set-padding-left',
                  payload: Number((event.target as HTMLInputElement).value),
                });
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Margin</legend>

            <fieldset className="box-link-properties">
              <label htmlFor="linkMarginNone">Link None</label>
              <input
                type="radio"
                name="linkMargin[]"
                id="linkMarginNone"
                checked={marginPropertyLink === 'none'}
                onChange={() => {
                  dispatch({
                    type: 'set-margin-property-link',
                    payload: 'none',
                  });
                }}
              />
              <label htmlFor="linkMarginTopBottom">Link T/B</label>
              <input
                type="radio"
                name="linkMargin[]"
                id="linkMarginTopBottom"
                onChange={() => {
                  dispatch({
                    type: 'set-margin-property-link',
                    payload: 'top-bottom',
                  });
                }}
              />
              <label htmlFor="linkMarginRightLeft">Link R/L</label>
              <input
                type="radio"
                name="linkMargin[]"
                id="linkMarginRightLeft"
                onChange={() => {
                  dispatch({
                    type: 'set-margin-property-link',
                    payload: 'right-left',
                  });
                }}
              />
              <label htmlFor="linkMarginAll">All</label>
              <input
                type="radio"
                name="linkMargin[]"
                id="linkMarginAll"
                onChange={() => {
                  dispatch({
                    type: 'set-margin-property-link',
                    payload: 'all',
                  });
                }}
              />
            </fieldset>

            <label htmlFor="boxMarginTop">Margin Top:</label>
            <input
              type="range"
              min="0"
              max="100"
              name="boxMarginTop"
              id="boxMarginTop"
              value={marginTop}
              step="5"
              onChange={(event) => {
                dispatch({
                  type: 'set-margin-top',
                  payload: Number((event.target as HTMLInputElement).value),
                });
              }}
            />
            <label htmlFor="boxMarginRight">Margin Right:</label>
            <input
              type="range"
              min="0"
              max="100"
              name="boxMarginRight"
              id="boxMarginRight"
              value={marginRight}
              step="5"
              onChange={(event) => {
                dispatch({
                  type: 'set-margin-right',
                  payload: Number((event.target as HTMLInputElement).value),
                });
              }}
            />
            <label htmlFor="boxMarginBottom">Margin Bottom:</label>
            <input
              type="range"
              min="0"
              max="100"
              name="boxMarginBottom"
              id="boxMarginBottom"
              value={marginBottom}
              step="5"
              onChange={(event) => {
                dispatch({
                  type: 'set-margin-bottom',
                  payload: Number((event.target as HTMLInputElement).value),
                });
              }}
            />
            <label htmlFor="boxMarginLeft">Margin Left:</label>
            <input
              type="range"
              min="0"
              max="100"
              name="boxMarginLeft"
              id="boxMarginLeft"
              value={marginLeft}
              step="5"
              onChange={(event) => {
                dispatch({
                  type: 'set-margin-left',
                  payload: Number((event.target as HTMLInputElement).value),
                });
              }}
            />
          </fieldset>

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
    </>
  );
}

export default BoxModel;
