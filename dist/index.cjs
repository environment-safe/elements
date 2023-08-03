"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.document = exports.customElements = exports.HTMLElement = exports.Element = void 0;
Object.defineProperty(exports, "isBrowser", {
  enumerable: true,
  get: function () {
    return _browserOrNode.isBrowser;
  }
});
exports.isClient = void 0;
Object.defineProperty(exports, "isJsDom", {
  enumerable: true,
  get: function () {
    return _browserOrNode.isJsDom;
  }
});
exports.variables = void 0;
var _browserOrNode = require("browser-or-node");
/*
import { isBrowser, isJsDom } from 'browser-or-node';
import * as mod from 'module';
import * as path from 'path';
let internalRequire = null;
if(typeof require !== 'undefined') internalRequire = require;
const ensureRequire = ()=> (!internalRequire) && (internalRequire = mod.createRequire(import.meta.url));
//*/

/**
 * A JSON object
 * @typedef { object } JSON
 */

const isClient = _browserOrNode.isBrowser || _browserOrNode.isJsDom;
exports.isClient = isClient;
const Element = isClient ? window.Element : function () {};
exports.Element = Element;
const HTMLElement = isClient ? window.HTMLElement : function () {};
exports.HTMLElement = HTMLElement;
const document = isClient ? window.document : {};
exports.document = document;
const variables = isClient ? window : {};
exports.variables = variables;
const customElements = isClient ? window.customElements : {
  define: () => {}
};
exports.customElements = customElements;