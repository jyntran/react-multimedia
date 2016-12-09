'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Exhibit = function (_React$Component) {
  _inherits(Exhibit, _React$Component);

  function Exhibit() {
    _classCallCheck(this, Exhibit);

    return _possibleConstructorReturn(this, (Exhibit.__proto__ || Object.getPrototypeOf(Exhibit)).apply(this, arguments));
  }

  _createClass(Exhibit, [{
    key: 'render',
    value: function render() {
      var exhibitStyle = {
        backgroundImage: "url(" + this.props.current.imageURL + ")"
      };

      return _react2.default.createElement(
        'div',
        { className: 'exhibit',
          style: exhibitStyle
        },
        _react2.default.createElement(
          'div',
          { className: 'video' },
          _react2.default.createElement(_reactPlayer2.default, { className: 'embed', url: this.props.current.videoURL })
        ),
        _react2.default.createElement(
          'article',
          { className: 'caption message' },
          _react2.default.createElement(
            'div',
            { className: 'message-body' },
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'h1',
                null,
                this.props.current.name
              ),
              _react2.default.createElement(
                'p',
                null,
                this.props.current.date
              )
            )
          )
        )
      );
    }
  }]);

  return Exhibit;
}(_react2.default.Component);

exports.default = Exhibit;