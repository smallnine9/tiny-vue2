(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  class Dep {
    static target = null //用于收集依赖watcher， watcher里面是副作用函数
    constructor() {
      this.dpes = new Set();
    }

    depend() {
    }

    notify() {
      this.dpes.forEach(watcher => watcher.update());
    }
  }

  function reactive(vm, data) {
    const dep = new Dep();
    Object.keys(data).forEach(key => {
      Object.defineProperty(vm, key, {
        get: function () {
          dep.depend();
          return data[key]
        },
        set: function (newVal) {
          data[key] = newVal;
          dep.notify();
        }
      });
    });
  }

  // define a function named Vue
  function Vue(options) {
    this._init(options);
  }

  Vue.prototype._init = function (options) {
    if(options.data) {
      this._data = reactive(this, options.data);
    }
  };

  return Vue;

}));
