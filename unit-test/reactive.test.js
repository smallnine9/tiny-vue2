import Vue from '../src/main.js'
import Watcher from '../src/watcher.js'
describe('reactive data', () => {
    test('reactive', () => {
        const vm = new Vue({
            data: {
                message: 'hello'
            }
        })
        const fn = jest.fn(() => console.log(vm.message))
        new Watcher(fn)
        expect(fn).toHaveBeenCalled()
        vm.message = 'hello world'
        expect(fn).toBeCalledTimes(2)
    })
})