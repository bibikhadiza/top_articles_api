'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactTransmit = require('react-transmit');

var _reactTransmit2 = _interopRequireDefault(_reactTransmit);

var _SideMenu = require('./SideMenu');

var _SideMenu2 = _interopRequireDefault(_SideMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fetchTopStories = (0, _isomorphicFetch2.default)('//api.nytimes.com/svc/topstories/v2/world.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193').then(function (response) {
  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }
  return response.json();
});

var App = exports.App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      topStories: null,
      mostPopular: null,
      mostPopularData: null
    };
    _this.handleTopStoriesClick = _this.handleTopStoriesClick.bind(_this);
    _this.handleMostPopClick = _this.handleMostPopClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleTopStoriesClick',
    value: function handleTopStoriesClick(event) {
      var _this2 = this;

      (0, _isomorphicFetch2.default)('//api.nytimes.com/svc/topstories/v2/' + event.target.value + '.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193').then(function (response) {
        if (response.status >= 400) {
          throw new Error('Unable to fetch stories');
        }
        return response.json();
      }).then(function (_ref) {
        var results = _ref.results;

        var topStories = results;
        _this2.setState({ topStories: topStories });
      });
    }
  }, {
    key: 'handleMostPopClick',
    value: function handleMostPopClick(event) {
      var _this3 = this;

      (0, _isomorphicFetch2.default)('//api.nytimes.com/svc/mostpopular/v2/mostviewed/' + event.target.value + '/30.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193').then(function (response) {
        if (response.status >= 400) {
          throw new Error('Unable to fetch stories');
        }
        return response.json();
      }).then(function (response) {
        _this3.setState({
          mostPopularData: response.results
        });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      (0, _isomorphicFetch2.default)('//api.nytimes.com/svc/mostpopular/v2/mostviewed/arts/30.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193').then(function (response) {
        if (response.status >= 400) {
          throw new Error('Unable to fetch stories');
        }
        return response.json();
      }).then(function (response) {
        _this4.setState({
          mostPopularData: response.results
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var sample = {
        backgroundColor: "red",
        height: "100%",
        float: "right"
      };

      var sample1 = {
        backgroundColor: "yellow",
        float: "right"
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SideMenu2.default, { handleTopStoriesClick: this.handleTopStoriesClick, handleMostPopClick: this.handleMostPopClick }),
        _react2.default.createElement(
          'div',
          { style: sample },
          this.state.topStories ? this.state.topStories.map(function (post) {
            return _react2.default.createElement(
              'div',
              null,
              post.title
            );
          }) : this.props.posts.results.map(function (post) {
            return _react2.default.createElement(
              'div',
              null,
              post.title
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { style: sample1 },
          this.state.mostPopularData ? this.state.mostPopularData.map(function (post) {
            return _react2.default.createElement(
              'div',
              null,
              post.title
            );
          }) : _react2.default.createElement(
            'h1',
            null,
            'no'
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

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