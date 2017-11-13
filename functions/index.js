'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _App = require('./src/App');

var _App2 = _interopRequireDefault(_App);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _reactTransmit = require('react-transmit');

var _reactTransmit2 = _interopRequireDefault(_reactTransmit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleRender(req, res) {
  _reactTransmit2.default.renderToString(_App2.default).then(function (_ref) {
    var reactString = _ref.reactString,
        reactData = _ref.reactData;

    _fs2.default.readFile('./build/index.html', 'utf8', function (err, data) {
      if (err) throw err;

      var document = data.replace(/<div id="root"><\/div>/, '<div id="root">' + reactString + '</div>');
      var output = _reactTransmit2.default.injectIntoMarkup(document, reactData, ['/build/client.js']);
      res.send(document);
    });
  });
}

var app = (0, _express2.default)();

app.use('/build', _express2.default.static(_path2.default.join(__dirname, 'build')));

app.get('*', handleRender);
app.listen(3000);