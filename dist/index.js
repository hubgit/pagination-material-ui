'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _chevronLeft = require('material-ui/svg-icons/navigation/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('material-ui/svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  pagination: {
    borderTop: '1px solid rgb(224, 224, 224)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  elements: {
    display: 'flex',
    alignItems: 'center',
    height: 56,
    marginLeft: 16
  },
  label: {
    color: '#999',
    fontWeight: 300,
    fontSize: 12
  }
};

var Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.nextPage = function () {
      return _this.changePage(1);
    };

    _this.previousPage = function () {
      return _this.changePage(-1);
    };

    _this.changePage = function (direction) {
      var _this$state = _this.state,
          currentPage = _this$state.currentPage,
          pageCount = _this$state.pageCount;


      var nextPage = currentPage + direction;

      nextPage = Math.max(nextPage, 0);
      nextPage = Math.min(nextPage, pageCount);

      _this.setState({ currentPage: nextPage });
      _this.onChange(nextPage);
    };

    _this.onChange = function (nextPage) {
      return _this.props.onChange(nextPage, _this.props.limit);
    };

    _this.state = {
      currentPage: 1,
      count: 0
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.calculatePageCount(this.props.total);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.calculatePageCount(nextProps.total);
    }
  }, {
    key: 'calculatePageCount',
    value: function calculatePageCount(total) {
      var limit = this.props.limit;


      this.setState({
        pageCount: Math.ceil(total / limit)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          total = _props.total,
          limit = _props.limit;
      var _state = this.state,
          currentPage = _state.currentPage,
          pageCount = _state.pageCount;


      if (!total) return _react2.default.createElement('div', null);
      // if (total < limit) return <div/>

      var to = currentPage * limit;
      var _from = to - limit + 1;

      to = Math.min(to, total);

      var showing = 'Showing {from} to {to} of {total}'.replace('{total}', String(total)).replace('{from}', String(_from)).replace('{to}', String(to));

      return _react2.default.createElement(
        'div',
        { style: styles.pagination },
        _react2.default.createElement(
          'div',
          { style: styles.elements },
          _react2.default.createElement(
            'div',
            { style: styles.label },
            showing
          ),
          _react2.default.createElement(
            _IconButton2.default,
            {
              disabled: currentPage === 1,
              onTouchTap: this.previousPage },
            _react2.default.createElement(_chevronLeft2.default, null)
          ),
          _react2.default.createElement(
            _IconButton2.default,
            {
              disabled: currentPage === pageCount,
              onTouchTap: this.nextPage },
            _react2.default.createElement(_chevronRight2.default, null)
          )
        )
      );
    }
  }]);

  return Pagination;
}(_react2.default.Component);

Pagination.propTypes = {
  onChange: _react.PropTypes.func.isRequired,
  total: _react.PropTypes.number.isRequired,
  limit: _react.PropTypes.number.isRequired
};
exports.default = Pagination;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map