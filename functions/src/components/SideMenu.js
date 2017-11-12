'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _semanticUiReact = require('semantic-ui-react');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var topStories = [{ key: 'home', text: 'home' }, { key: 'opinion', text: 'opinion' }, { key: 'world', text: 'world' }, { key: 'national', text: 'national' }, { key: 'politics', text: 'politics' }, { key: 'upshot', text: 'upshot' }, { key: 'nyregion', text: 'nyregion' }, { key: 'business', text: 'business' }, { key: 'technology', text: 'technology' }, { key: 'science', text: 'science' }, { key: 'health', text: 'health' }, { key: 'sports', text: 'sports' }, { key: 'arts', text: 'arts' }, { key: 'books', text: 'books' }, { key: 'movies', text: 'movies' }, { key: 'theater', text: 'theater' }, { key: 'sundayreview', text: 'sundayreview' }, { key: 'fashion', text: 'fashion' }, { key: 'tmagazine', text: 'tmagazine' }, { key: 'food', text: 'food' }, { key: 'travel', text: 'travel' }, { key: 'magazine', text: 'magazine' }];
// import { createReactClass } from 'create-react-class';


var mostPopularOptions = [{ key: 'mostemailed', text: "most emailed" }, { key: 'mostshared', text: 'most shared' }, { key: 'mostviewed', text: 'most viewed' }];

// var SideMenu = React.createClass({
//   render() {
//     var sideBarStyle = {
//       height: "100%",
//       width: "30%",
//       backgroundColor: "grey",
//       textAlign: "center"
//      };
//
//      var dropDownParent = {
//        textAlign: "center",
//        height: "auto",
//        width: "75%",
//        backgroundColor: "white"
//      }
//
//      var dropDownStyle = {
//        "marginBottom": "30px"
//      }
//
//   return (
//     <div style={sideBarStyle}>
//       <div style={dropDownParent}>
//         <Dropdown placeholder='Top Stories' options={topStories} style={dropDownStyle}/>
//         <Dropdown placeholder='Top Stories'  options={mostPopularOptions} style={dropDownStyle} />
//       </div>
//     </div>
//     )
//   }
// })

var sideBarStyle = {
  height: "100%",
  width: "30%",
  backgroundColor: "grey",
  textAlign: "center"
};

var dropDownParent = {
  textAlign: "center",
  height: "auto",
  width: "75%",
  backgroundColor: "white"
};

var dropDownStyle = {
  "marginBottom": "30px"
};

function SideMenu() {
  return _react2.default.createElement(
    'div',
    { style: sideBarStyle },
    _react2.default.createElement(
      'div',
      { style: dropDownParent },
      _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Top Stories', options: topStories, style: dropDownStyle }),
      _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Top Stories', options: mostPopularOptions, style: dropDownStyle })
    )
  );
}

exports.default = SideMenu;