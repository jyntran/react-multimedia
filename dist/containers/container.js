'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gallery = require('./modules/gallery.jsx');

var _gallery2 = _interopRequireDefault(_gallery);

var _exhibit = require('./modules/exhibit.jsx');

var _exhibit2 = _interopRequireDefault(_exhibit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import items from '../data/items.json';

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container(props) {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

    _this.state = {
      current: {}
    };

    _this.select = _this.select.bind(_this);

    _this.items = _this.props.items;
    return _this;
  }

  _createClass(Container, [{
    key: 'select',
    value: function select(obj) {
      this.setState({
        current: obj
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.select(this.items[0]);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'main' },
        _react2.default.createElement(_gallery2.default, {
          items: this.items,
          select: this.select
        }),
        _react2.default.createElement(_exhibit2.default, {
          current: this.state.current
        })
      );
    }
  }]);

  return Container;
}(_react2.default.Component);

exports.default = Container;