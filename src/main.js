// define a function named Vue
function Vue(options) {
  this._init(options)
}

Vue.prototype._init = function (options) {
  Object.keys(options.data).forEach(key => {
    Object.defineProperty(this, key, {
      get: function () {
        return options.data[key]
      },
      set: function (newVal) {
        options.data[key] = newVal
      }
    })
  })
}

export default Vue
