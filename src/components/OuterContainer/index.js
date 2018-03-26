import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'html': {
    'fontFamily': 'sans-serif',
    'MsTextSizeAdjust': '100%',
    'WebkitTextSizeAdjust': '100%',
    'only screen&&<w480': {
      'fontSize': [{ 'unit': '%V', 'value': 1 }]
    }
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'article': {
    'display': 'block'
  },
  'aside': {
    'display': 'block'
  },
  'details': {
    'display': 'block'
  },
  'figcaption': {
    'display': 'block'
  },
  'figure': {
    'display': 'block'
  },
  'footer': {
    'display': 'block'
  },
  'header': {
    'display': 'block'
  },
  'main': {
    'display': 'block'
  },
  'menu': {
    'display': 'block'
  },
  'nav': {
    'display': 'block'
  },
  'section': {
    'display': 'block'
  },
  'summary': {
    'display': 'block'
  },
  'audio': {
    'display': 'inline-block'
  },
  'canvas': {
    'display': 'inline-block'
  },
  'progress': {
    'display': 'inline-block'
  },
  'video': {
    'display': 'inline-block'
  },
  'audio:not([controls])': {
    'display': 'none',
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  'progress': {
    'verticalAlign': 'baseline'
  },
  '[hidden]': {
    'display': 'none'
  },
  'template': {
    'display': 'none'
  },
  'a': {
    'backgroundColor': 'transparent',
    'WebkitTextDecorationSkip': 'objects'
  },
  'a:active': {
    'outlineWidth': '0'
  },
  'a:hover': {
    'outlineWidth': '0'
  },
  'abbr[title]': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }],
    'textDecoration': 'underline',
    'textDecoration': 'underline dotted'
  },
  'b': {
    'fontWeight': 'inherit',
    'fontWeight': 'bolder'
  },
  'strong': {
    'fontWeight': 'inherit',
    'fontWeight': 'bolder'
  },
  'dfn': {
    'fontStyle': 'italic'
  },
  'h1': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'margin': [{ 'unit': 'em', 'value': 0.67 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.67 }, { 'unit': 'px', 'value': 0 }]
  },
  'mark': {
    'backgroundColor': '#ff0',
    'color': '#000'
  },
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }]
  },
  'sub': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sup': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sub': {
    'bottom': [{ 'unit': 'em', 'value': -0.25 }]
  },
  'sup': {
    'top': [{ 'unit': 'em', 'value': -0.5 }]
  },
  'img': {
    'borderStyle': 'none'
  },
  'svg:not(:root)': {
    'overflow': 'hidden'
  },
  'code': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'kbd': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'pre': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'samp': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'figure': {
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 40 }]
  },
  'hr': {
    'boxSizing': 'content-box',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'visible'
  },
  'button': {
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input': {
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'optgroup': {
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'select': {
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'textarea': {
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'optgroup': {
    'fontWeight': '700'
  },
  'button': {
    'overflow': 'visible'
  },
  'input': {
    'overflow': 'visible'
  },
  'button': {
    'textTransform': 'none'
  },
  'select': {
    'textTransform': 'none'
  },
  '[type=reset]': {
    'WebkitAppearance': 'button'
  },
  '[type=submit]': {
    'WebkitAppearance': 'button'
  },
  'button': {
    'WebkitAppearance': 'button'
  },
  'html [type=button]': {
    'WebkitAppearance': 'button'
  },
  '[type=button]::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type=reset]::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type=submit]::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'button::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type=button]:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  '[type=reset]:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  '[type=submit]:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  'button:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  'fieldset': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'silver' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }],
    'padding': [{ 'unit': 'em', 'value': 0.35 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.625 }]
  },
  'legend': {
    'boxSizing': 'border-box',
    'color': 'inherit',
    'display': 'table',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'normal'
  },
  'textarea': {
    'overflow': 'auto'
  },
  '[type=checkbox]': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type=radio]': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type=number]::-webkit-inner-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '[type=number]::-webkit-outer-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '[type=search]': {
    'WebkitAppearance': 'textfield',
    'outlineOffset': '-2px'
  },
  '[type=search]::-webkit-search-cancel-button': {
    'WebkitAppearance': 'none'
  },
  '[type=search]::-webkit-search-decoration': {
    'WebkitAppearance': 'none'
  },
  '::-webkit-input-placeholder': {
    'color': 'inherit',
    'opacity': '.54'
  },
  '::-webkit-file-upload-button': {
    'WebkitAppearance': 'button',
    'font': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'html': {
    'font': [{ 'unit': '%V', 'value': 1.125 }, { 'unit': 'string', 'value': 'georgia,' }, { 'unit': 'string', 'value': 'serif' }],
    'boxSizing': 'border-box',
    'overflowY': 'scroll'
  },
  '*': {
    'boxSizing': 'inherit'
  },
  '*:before': {
    'boxSizing': 'inherit'
  },
  '*:after': {
    'boxSizing': 'inherit'
  },
  'body': {
    'color': 'hsla(0, 0%, 0%, 0.8)',
    'fontFamily': 'georgia, serif',
    'fontWeight': 'normal',
    'wordWrap': 'break-word',
    'fontKerning': 'normal',
    'MozFontFeatureSettings': '"kern", "liga", "clig", "calt"',
    'MsFontFeatureSettings': '"kern", "liga", "clig", "calt"',
    'WebkitFontFeatureSettings': '"kern", "liga", "clig", "calt"',
    'fontFeatureSettings': '"kern", "liga", "clig", "calt"'
  },
  'img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'h1': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }],
    'color': 'inherit',
    'fontFamily': '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    'fontWeight': 'bold',
    'textRendering': 'optimizeLegibility',
    'fontSize': [{ 'unit': 'rem', 'value': 2.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }]
  },
  'h2': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }],
    'color': 'inherit',
    'fontFamily': '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    'fontWeight': 'bold',
    'textRendering': 'optimizeLegibility',
    'fontSize': [{ 'unit': 'rem', 'value': 1.62671 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }]
  },
  'h3': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }],
    'color': 'inherit',
    'fontFamily': '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    'fontWeight': 'bold',
    'textRendering': 'optimizeLegibility',
    'fontSize': [{ 'unit': 'rem', 'value': 1.38316 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }]
  },
  'h4': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }],
    'color': 'inherit',
    'fontFamily': '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    'fontWeight': 'bold',
    'textRendering': 'optimizeLegibility',
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }]
  },
  'h5': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }],
    'color': 'inherit',
    'fontFamily': '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    'fontWeight': 'bold',
    'textRendering': 'optimizeLegibility',
    'fontSize': [{ 'unit': 'rem', 'value': 0.85028 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }]
  },
  'h6': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }],
    'color': 'inherit',
    'fontFamily': '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    'fontWeight': 'bold',
    'textRendering': 'optimizeLegibility',
    'fontSize': [{ 'unit': 'rem', 'value': 0.78405 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }]
  },
  'hgroup': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'ul': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.45 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }],
    'listStylePosition': 'outside',
    'listStyleImage': 'none'
  },
  'ol': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.45 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }],
    'listStylePosition': 'outside',
    'listStyleImage': 'none'
  },
  'dl': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'dd': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'p': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'figure': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'pre': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.85 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.42 }],
    'background': 'hsla(0, 0%, 0%, 0.04)',
    'borderRadius': '3px',
    'overflow': 'auto',
    'wordWrap': 'normal',
    'padding': [{ 'unit': 'rem', 'value': 1.45 }, { 'unit': 'rem', 'value': 1.45 }, { 'unit': 'rem', 'value': 1.45 }, { 'unit': 'rem', 'value': 1.45 }]
  },
  'table': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1.45 }],
    'borderCollapse': 'collapse',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'fieldset': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'blockquote': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.45 }],
    'marginRight': [{ 'unit': 'rem', 'value': 1.45 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'form': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'noscript': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'iframe': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'hr': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': NaN }],
    'background': 'hsla(0, 0%, 0%, 0.2)',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'height': [{ 'unit': 'px', 'value': 1 }]
  },
  'address': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'b': {
    'fontWeight': 'bold'
  },
  'strong': {
    'fontWeight': 'bold'
  },
  'dt': {
    'fontWeight': 'bold'
  },
  'th': {
    'fontWeight': 'bold'
  },
  'li': {
    'marginBottom': [{ 'unit': 'rem', 'value': NaN }]
  },
  'ol li': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'ul li': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'li > ol': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.45 }],
    'marginBottom': [{ 'unit': 'rem', 'value': NaN }],
    'marginTop': [{ 'unit': 'rem', 'value': NaN }]
  },
  'li > ul': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.45 }],
    'marginBottom': [{ 'unit': 'rem', 'value': NaN }],
    'marginTop': [{ 'unit': 'rem', 'value': NaN }]
  },
  'blockquote *:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'li *:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'p *:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'li > p': {
    'marginBottom': [{ 'unit': 'rem', 'value': NaN }]
  },
  'code': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.85 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'kbd': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.85 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'samp': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.85 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1.45 }]
  },
  'abbr': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': '%H', 'value': NaN }],
    'cursor': 'help'
  },
  'acronym': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': '%H', 'value': NaN }],
    'cursor': 'help'
  },
  'abbr[title]': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': '%H', 'value': NaN }],
    'cursor': 'help',
    'textDecoration': 'none'
  },
  'thead': {
    'textAlign': 'left'
  },
  'td': {
    'textAlign': 'left',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': '%H', 'value': NaN }],
    'fontFeatureSettings': '"tnum"',
    'MozFontFeatureSettings': '"tnum"',
    'MsFontFeatureSettings': '"tnum"',
    'WebkitFontFeatureSettings': '"tnum"',
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.96667 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.96667 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 0.725 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': NaN }]
  },
  'th': {
    'textAlign': 'left',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': '%H', 'value': NaN }],
    'fontFeatureSettings': '"tnum"',
    'MozFontFeatureSettings': '"tnum"',
    'MsFontFeatureSettings': '"tnum"',
    'WebkitFontFeatureSettings': '"tnum"',
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.96667 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.96667 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 0.725 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': NaN }]
  },
  'th:first-child': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'td:first-child': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'th:last-child': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'td:last-child': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'tt': {
    'backgroundColor': 'hsla(0, 0%, 0%, 0.04)',
    'borderRadius': '3px',
    'fontFamily': '"SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
    "Liberation Mono", Menlo, Courier, monospace',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'em', 'value': 0.2 }],
    'paddingBottom': [{ 'unit': 'em', 'value': 0.2 }]
  },
  'code': {
    'backgroundColor': 'hsla(0, 0%, 0%, 0.04)',
    'borderRadius': '3px',
    'fontFamily': '"SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
    "Liberation Mono", Menlo, Courier, monospace',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'em', 'value': 0.2 }],
    'paddingBottom': [{ 'unit': 'em', 'value': 0.2 }]
  },
  'pre code': {
    'background': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 1.42 }]
  },
  'code:before': {
    'letterSpacing': [{ 'unit': 'em', 'value': -0.2 }],
    'content': '" "'
  },
  'code:after': {
    'letterSpacing': [{ 'unit': 'em', 'value': -0.2 }],
    'content': '" "'
  },
  'tt:before': {
    'letterSpacing': [{ 'unit': 'em', 'value': -0.2 }],
    'content': '" "'
  },
  'tt:after': {
    'letterSpacing': [{ 'unit': 'em', 'value': -0.2 }],
    'content': '" "'
  },
  'pre code:before': {
    'content': '""'
  },
  'pre code:after': {
    'content': '""'
  },
  'pre tt:before': {
    'content': '""'
  },
  'pre tt:after': {
    'content': '""'
  }
});
