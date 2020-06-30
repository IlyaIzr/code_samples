import { compose } from 'redux';

/* eslint-disable */
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-use-before-define
/* eslint-enable */
export default composeEnhancers;
