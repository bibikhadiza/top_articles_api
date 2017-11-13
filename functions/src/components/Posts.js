'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPosts;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPosts() {
  return (0, _isomorphicFetch2.default)('//api.nytimes.com/svc/topstories/v2/world.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193').then(function (res) {
    return res.json();
  });
}