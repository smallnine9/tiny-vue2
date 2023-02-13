import { Dep } from './dep'
export function reactive(vm, data) {
  const dep = new Dep()
  Object.keys(data).forEach(key => {
    Object.defineProperty(vm, key, {
      get: function () {
        dep.depend()
        return data[key]
      },
      set: function (newVal) {
        data[key] = newVal
        dep.notify()
      }
    })
  })
}