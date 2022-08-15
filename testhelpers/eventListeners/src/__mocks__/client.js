/* import { JSDOM } from "jsdom";
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window; */
import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder