'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactTransmit = require('react-transmit');

var _reactTransmit2 = _interopRequireDefault(_reactTransmit);

var _SideMenu = require('./SideMenu');

var _SideMenu2 = _interopRequireDefault(_SideMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React from 'react';
//
// function App(props){
//   const facts = props.facts.map((fact, i) => {
//     return <li key={i}>{fact.text}</li>
//   })
//   return (
//     <ul>
//       {facts}
//     </ul>
//   )
// }
//
// export default App;

var fetchTopStories = (0, _isomorphicFetch2.default)('//api.nytimes.com/svc/topstories/v2/world.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193').then(function (response) {
  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }
  return response.json();
});

var App = _react2.default.createClass({
  displayName: 'App',

  render: function render() {
    var sample = {
      backgroundColor: "red",
      height: "100%",
      float: "right"
    };
    console.log(this.props.posts.results);

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_SideMenu2.default, null)
    );
  }
});

exports.default = _reactTransmit2.default.createContainer(App, {
  initialVariables: {},
  fragments: {
    posts: function posts() {
      return fetchTopStories.then(function (resp) {
        return resp;
      });
    }
  }
});