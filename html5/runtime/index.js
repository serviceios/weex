/**
 * @fileOverview
 * Register framework(s) in JS runtime. Weex supply two layers for 3rd-party
 * framework(s): one is the instance management layer, another is the
 * virtual-DOM layer.
 */

// This config is generated by `npm run build:config`.
// It will collect all `runtime/framework-*.js` files and import each of them.
// The filename is also the framework name.
import { Document, Element, Comment } from '../vdom'
import Listener from '../vdom/listener'
import frameworks from './config'

import init from './init'

const config = {
  Document, Element, Comment, Listener, frameworks,
  sendTasks (...args) {
    return global.callNative(...args)
  }
}

Document.handler = config.sendTasks

const methods = init(config)

export default methods
