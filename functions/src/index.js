'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import getFacts from './components/Facts'

// getFacts().then(facts => {
//   ReactDOM.render(<App facts={facts}/>, document.getElementById('root'));
//   registerServiceWorker();
// })

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById("root"));