import Vue from '../src/main.js'
describe('new Vue', () => {
  test('new Vue reactived primitive type data', () => {
    const vm = new Vue({
      data: {
        a: 1
      }
    })
    vm.a = 2
    expect(vm.a).toBe(2)
  })
  test('new Vue reactived object type data', () => {
    const obj = { b: 1 }
    const vm = new Vue({
      data: {
        obj
      }
    })
    vm.obj.b = 2
    expect(obj.b).toBe(2)
  })
  test('new Vue reactived array type data', () => {
    const arr = [1, 2, 3]
    const vm = new Vue({
      data: {
        arr
      }
    })
    vm.arr[0] = 4
    expect(arr[0]).toBe(4)
  })
})
