// define a function named Vue
import { reactive } from './reactive.js'
function Vue(options) {
  this._init(options)
}

Vue.prototype._init = function (options) {
  if(options.data) {
    this._data = reactive(this, options.data)
  }
}

export default Vue
