import { Dep, pushTarget, popTarget } from './dep'
export default class Watcher {
    constructor (trigger) {
        this.trigger = trigger
        this.get()
    }
    get() {
        pushTarget(this)
        this.value = this.trigger()
        popTarget()
    }
    update() {
        this.get()
    }
}