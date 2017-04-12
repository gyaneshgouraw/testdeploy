/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.Image = exports.Offline = exports.LayoutPadding = exports.LayoutBorder = exports.Title = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    font-size: 1.5em;\n    text-align: center;\n    color: Black;\n    '], ['\n    font-size: 1.5em;\n    text-align: center;\n    color: Black;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        border:1px solid #f1efef;\n        box-shadow: .5px .5px 2px #f1efef\n    '], ['\n        border:1px solid #f1efef;\n        box-shadow: .5px .5px 2px #f1efef\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        padding:25px\n    '], ['\n        padding:25px\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        border:1px solid #f1efef;\n        padding: 20px;\n        color: grey;\n        box-shadow: 2px 2px 1px #f1efef;\n'], ['\n        border:1px solid #f1efef;\n        padding: 20px;\n        color: grey;\n        box-shadow: 2px 2px 1px #f1efef;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n        width:158px;\n\n'], ['\n        width:158px;\n\n']);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = exports.Title = _styledComponents2.default.h1(_templateObject);

var LayoutBorder = exports.LayoutBorder = _styledComponents2.default.div(_templateObject2);

var LayoutPadding = exports.LayoutPadding = _styledComponents2.default.div(_templateObject3);

var Offline = exports.Offline = _styledComponents2.default.div(_templateObject4);
var Image = exports.Image = _styledComponents2.default.img(_templateObject5);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *
 * ACTION CONSTANTS
 *
 * All REQUEST, RECEIVE, and FAILURE action constants are defined here
 * and reused in the corresponding Action component
 *
 * Refer - http://redux.js.org/docs/advanced/AsyncActions.html
 *
 */

var GET_AUTHOR_NAME = exports.GET_AUTHOR_NAME = 'Request author name';

var SET_AUTHOR_NAME = exports.SET_AUTHOR_NAME = 'Set author name';

var RESET_AUTHOR_NAME = exports.RESET_AUTHOR_NAME = 'Reset author name';

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *
 * ACTION CONSTANTS
 *
 * All REQUEST, RECEIVE, and FAILURE action constants are defined here
 * and reused in the corresponding Action component
 *
 * Refer - http://redux.js.org/docs/advanced/AsyncActions.html
 *
 */

var GET_REPO_NAMES = exports.GET_REPO_NAMES = 'Request repo names';

var SET_REPO_NAMES = exports.SET_REPO_NAMES = 'Set repo names';

var RESET_REPO_NAMES = exports.RESET_REPO_NAMES = 'Reset repo names';

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-console, no-use-before-define */

//import Express from 'express'


var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _qs = __webpack_require__(29);

var _qs2 = _interopRequireDefault(_qs);

var _koa = __webpack_require__(25);

var _koa2 = _interopRequireDefault(_koa);

var _koaMount = __webpack_require__(26);

var _koaMount2 = _interopRequireDefault(_koaMount);

var _koaStatic = __webpack_require__(27);

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _webpack = __webpack_require__(9);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = __webpack_require__(24);

var _webpack4 = _interopRequireDefault(_webpack3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(30);

var _reactRedux = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

var _routes = __webpack_require__(20);

var _routes2 = _interopRequireDefault(_routes);

var _configureStore = __webpack_require__(22);

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [handleRender].map(regeneratorRuntime.mark);

var app = new _koa2.default();
var port = 3002;

// Use this middleware to set up hot module reloading via webpack.

app.use((0, _koaMount2.default)('/static', (0, _koaStatic2.default)('dist')));

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(next) {
  var _this = this;

  var preloadedState;
  return regeneratorRuntime.wrap(function handleRender$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          // preloading state with reducer default values
          preloadedState = {
            home: {}
          };


          (0, _reactRouter.match)({ routes: _routes2.default, location: this.request.url }, function (err, redirect, renderProps) {
            if (renderProps) {
              if (_this.request.url === '/repos') {
                preloadedState = _extends({}, preloadedState, { repos: { repoList: ['Server Rendered 1', 'SSR 2', 'SSR 3', ' SSR 4'] } });
              }
              var store = (0, _configureStore2.default)(preloadedState);
              var html = (0, _server.renderToString)(_react2.default.createElement(
                _reactRedux.Provider,
                { store: store },
                _react2.default.createElement(_reactRouter.RouterContext, renderProps)
              ));
              var finalState = store.getState();
              _this.body = renderFullPage(html, finalState);
            } else {
              _this.body = 'This is not the listed route';
            }
          });
          _context.next = 4;
          return next;

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function renderFullPage(html, preloadedState) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Redux Universal Example</title>\n      </head>\n      <body>\n        <div id="app">' + html + '</div>\n        <script>\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\x3c') + '\n        </script>\n        <script src="/static/bundle.js"></script>\n      </body>\n    </html>\n    ';
}

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> \uD83C\uDF0E  Listening on port ' + port + '. Open up http://localhost:' + port + '/ in your browser.');
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-register");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resetAuthorName = exports.setAuthorName = exports.getAuthorName = undefined;

var _ActionTypes = __webpack_require__(5);

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
@function getAuthorName
@returns {action} GET_AUTHOR_NAME
@description This is an action which is dispatched at for getting author name
*/
var getAuthorName = exports.getAuthorName = function getAuthorName() {
	return {
		type: types.GET_AUTHOR_NAME
	};
};

/**
@function setAuthorName
@returns {action} SET_AUTHOR_NAMES
@description This is an action which is dispatched at for setting author name
*/
var setAuthorName = exports.setAuthorName = function setAuthorName(data) {
	return {
		type: types.SET_AUTHOR_NAME,
		data: data
	};
};

/**
@function resetAuthorName
@returns {action} RESET_AUTHOR_NAMES
@description This is an action which is dispatched at for resetting author name
*/
var resetAuthorName = exports.resetAuthorName = function resetAuthorName() {
	return {
		type: types.RESET_AUTHOR_NAME
	};
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CompLayoutBorder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\tborder:1px solid #f1efef;\n\tpadding:25px;\n\t'], ['\n\tborder:1px solid #f1efef;\n\tpadding:25px;\n\t']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Actions = __webpack_require__(13);

var _styleComponents = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CompLayoutBorder = exports.CompLayoutBorder = (0, _styledComponents2.default)(_styleComponents.LayoutBorder)(_templateObject);

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
		//call to super() should be the first statement in the constructor


		_this.setAuthor = _this.setAuthor.bind(_this);
		_this.resetAuthor = _this.resetAuthor.bind(_this);
		return _this;
	}

	_createClass(Home, [{
		key: 'setAuthor',
		value: function setAuthor() {
			this.props.dispatch((0, _Actions.setAuthorName)('GG'));
		}
	}, {
		key: 'resetAuthor',
		value: function resetAuthor() {
			this.props.dispatch((0, _Actions.resetAuthorName)());
		}
	}, {
		key: 'render',
		value: function render() {
			var margin = { 'marginTop': '20px' };
			return _react2.default.createElement(
				CompLayoutBorder,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'p',
						null,
						'HOME'
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/repos', activeStyle: { color: 'red' } },
							'Navigate to Repos'
						)
					),
					_react2.default.createElement(
						'li',
						{ style: margin },
						_react2.default.createElement(
							'button',
							{ onClick: this.setAuthor },
							'Set Author Name'
						),
						' ',
						_react2.default.createElement(
							'span',
							null,
							this.props.homeState && this.props.homeState.author
						)
					),
					this.props.homeState.author && _react2.default.createElement(
						'li',
						{ style: margin },
						_react2.default.createElement(
							'button',
							{ onClick: this.resetAuthor },
							'Reset Author Name'
						)
					)
				)
			);
		}
	}]);

	return Home;
}(_react.Component);

function mapStateToProps(state, ownParams) {
	return {
		homeState: state.home
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouter.withRouter)(Home));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Import action constants
                                                                                                                                                                                                                                                                   */


var _ActionTypes = __webpack_require__(5);

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *	@function repos
 *  @param {object} state
 *  @param {object} action
 *	@description This is a repos reducer which updates
 *  the repos store based different action types like
 */

var home = function home() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { author: '' };
    var action = arguments[1];

    switch (action.type) {
        case types.SET_AUTHOR_NAME:
            {
                return _extends({}, state, {
                    author: action.data
                });
            }

        case types.GET_AUTHOR_NAME:
            {
                return _extends({}, state);
            }

        case types.RESET_AUTHOR_NAME:
            {
                return _extends({}, state, {
                    author: ''
                });
            }

        default:
            return state;
    }
};

exports.default = home;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resetRepos = exports.setRepoNames = exports.getRepoNames = undefined;

var _ActionTypes = __webpack_require__(6);

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
@function getRepoNames
@returns {action} GET_REPO_NAMES
@description This is an action which is dispatched at for getting repo names
*/
var getRepoNames = exports.getRepoNames = function getRepoNames() {
	return {
		type: types.GET_REPO_NAMES
	};
};

/**
@function setRepoNames
@returns {action} SET_REPO_NAMES
@description This is an action which is dispatched at for setting repo names
*/
var setRepoNames = exports.setRepoNames = function setRepoNames(data) {
	return {
		type: types.SET_REPO_NAMES,
		data: data
	};
};

/**
@function resetRepos
@returns {action} RESET_REPO_NAMES
@description This is an action which is dispatched at for resetting repo names
*/
var resetRepos = exports.resetRepos = function resetRepos(data) {
	return {
		type: types.RESET_REPO_NAMES,
		data: data
	};
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CompLayoutBorder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\tborder:1px solid #f1efef;\n\tpadding:25px\n\t'], ['\n\tborder:1px solid #f1efef;\n\tpadding:25px\n\t']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Actions = __webpack_require__(16);

var _styleComponents = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CompLayoutBorder = exports.CompLayoutBorder = _styledComponents2.default.div(_templateObject);

var Repos = function (_Component) {
	_inherits(Repos, _Component);

	function Repos(props) {
		_classCallCheck(this, Repos);

		var _this = _possibleConstructorReturn(this, (Repos.__proto__ || Object.getPrototypeOf(Repos)).call(this, props));
		//call to super() should be the first statement in the constructor


		_this.setRepos = _this.setRepos.bind(_this);
		_this.resetRepos = _this.resetRepos.bind(_this);
		return _this;
	}

	_createClass(Repos, [{
		key: 'setRepos',
		value: function setRepos() {
			var repoName = ['Client side rendered -1', 'CSR -2', 'CSR -3', 'CSR -4'];
			this.props.dispatch((0, _Actions.setRepoNames)(repoName));
		}
	}, {
		key: 'resetRepos',
		value: function resetRepos() {
			this.props.dispatch((0, _Actions.resetRepos)());
		}
	}, {
		key: 'render',
		value: function render() {
			var repoList = this.props.repo.repoList && this.props.repo.repoList.map(function (item) {
				return _react2.default.createElement(
					'li',
					{ key: item },
					item
				);
			}),
			    margin = { 'marginTop': '20px' };

			return _react2.default.createElement(
				CompLayoutBorder,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'p',
						null,
						'Repo'
					),
					_react2.default.createElement(
						'li',
						{ style: margin },
						' If you directly reload this page - you will see server rendered Page'
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/', activeStyle: { color: 'red' } },
							'Navigate to home'
						)
					),
					_react2.default.createElement(
						'li',
						{ style: margin },
						_react2.default.createElement(
							'button',
							{ onClick: this.setRepos },
							'Set Repos'
						),
						_react2.default.createElement(
							'ul',
							null,
							repoList
						)
					),
					this.props.repo.repoList.length > 0 && _react2.default.createElement(
						'li',
						{ style: margin },
						_react2.default.createElement(
							'button',
							{ onClick: this.resetRepos },
							'Reset Repos'
						)
					),
					_react2.default.createElement(
						_styleComponents.Offline,
						null,
						_react2.default.createElement(
							'p',
							null,
							'This image works offline',
							_react2.default.createElement(
								'li',
								null,
								'Want to test -'
							),
							_react2.default.createElement(
								'li',
								null,
								'Go offline and open in incognito mode '
							),
							_react2.default.createElement(
								'li',
								null,
								'It wont work(display), but in normal mode it will work while being offline'
							),
							' '
						),
						_react2.default.createElement(_styleComponents.Image, { src: 'https://brightonsc.vic.edu.au/images/Offline.png' })
					)
				)
			);
		}
	}]);

	return Repos;
}(_react.Component);

function mapStateToProps(state, ownParams) {
	return {
		repo: state.repos
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouter.withRouter)(Repos));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Import action constants
                                                                                                                                                                                                                                                                   */


var _ActionTypes = __webpack_require__(6);

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *	@function repos
 *  @param {object} state
 *  @param {object} action
 *	@description This is a repos reducer which updates
 *  the repos store based different action types like
 */

var repos = function repos() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { repoList: [] };
    var action = arguments[1];

    switch (action.type) {
        case types.SET_REPO_NAMES:
            {
                return _extends({}, state, {
                    repoList: action.data
                });
            }

        case types.GET_REPO_NAMES:
            {
                return _extends({}, state);
            }

        case types.RESET_REPO_NAMES:
            {
                return _extends({}, state, {
                    repoList: []
                });
            }

        default:
            return state;
    }
};

exports.default = repos;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

var _styleComponents = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuperContainer = function (_Component) {
	_inherits(SuperContainer, _Component);

	function SuperContainer(props) {
		_classCallCheck(this, SuperContainer);

		//call to super() should be the first statement in the constructor
		return _possibleConstructorReturn(this, (SuperContainer.__proto__ || Object.getPrototypeOf(SuperContainer)).call(this, props));
	}

	_createClass(SuperContainer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_styleComponents.LayoutBorder,
				null,
				_react2.default.createElement(
					_styleComponents.Title,
					null,
					'Super Container Layout'
				),
				_react2.default.createElement(
					_styleComponents.LayoutPadding,
					null,
					this.props.children
				)
			);
		}
	}]);

	return SuperContainer;
}(_react.Component);

function mapStateToProps(state, ownParams) {
	return {
		test: state
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouter.withRouter)(SuperContainer));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _SuperContainer = __webpack_require__(19);

var _SuperContainer2 = _interopRequireDefault(_SuperContainer);

var _Container = __webpack_require__(17);

var _Container2 = _interopRequireDefault(_Container);

var _Container3 = __webpack_require__(14);

var _Container4 = _interopRequireDefault(_Container3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _SuperContainer2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Container4.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/repos', component: _Container2.default })
); // modules/routes.js
exports.default = routes;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _Reducer = __webpack_require__(18);

var _Reducer2 = _interopRequireDefault(_Reducer);

var _Reducer3 = __webpack_require__(15);

var _Reducer4 = _interopRequireDefault(_Reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  repos: _Reducer2.default,
  home: _Reducer4.default
});

exports.default = rootReducer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(31);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(21);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = function configureStore(preloadedState) {
  var store = (0, _redux.createStore)(_reducers2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', function () {
      var nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

exports.default = configureStore;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(10);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(7);
var webpack = __webpack_require__(9);
var OfflinePlugin = __webpack_require__(28);

module.exports = {
  devtool: 'inline-source-map',
  entry: ['webpack/hot/only-dev-server/', 'webpack-dev-server/client?http://localhost:3030/', './client/index.js'],
  // entry: [
  //   'webpack-hot-middleware/client',
  //   './client/index.js'
  // ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [new webpack.optimize.OccurrenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new OfflinePlugin()],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: __dirname,
      query: {
        presets: ['react-hmre']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    hot: true,
    contentBase: __dirname,
    port: 3030
  }
};

//https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96

//https://medium.com/@justinjung04/react-server-side-rendering-and-hot-reloading-ffb87ca81a89

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("koa-mount");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("offline-plugin");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ]);