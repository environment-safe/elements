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
import { isBrowser, isJsDom } from 'browser-or-node';
export { isBrowser, isJsDom };
export const isClient = isBrowser || isJsDom;
export const Element = (isClient)?window.Element:function(){};
export const HTMLElement = (isClient)?window.HTMLElement:function(){};
export const document = (isClient)?window.document:{};
export const variables = (isClient)?window:{};
export const customElements = (isClient)?window.customElements:{define:()=>{}};