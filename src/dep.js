import Watcher from "./watcher"

export class Dep {
  static target = null //用于收集依赖watcher， watcher里面是副作用函数
  constructor() {
    this.deps = new Set()
  }

  depend() {
    console.log('depend')
    if(Dep.target) {
        this.deps.add(Dep.target)
    }
  }

  notify() {
    console.log('notify', this.deps)
    this.deps.forEach(watcher => watcher.update())
  }
}

const taskStack= []

export function pushTarget(watcher) {
    if(Dep.target) {
        taskStack.push(watcher)
    }
    Dep.target = watcher
}

export function popTarget() {
    Dep.target = taskStack.pop()
}