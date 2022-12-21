import 'reflect-metadata'
import ControllerRouter from '../common/ControllerRouter'

type TMethodType = 'get' | 'post' | 'put' | 'delete'

const Controller = (filePath: string) => {
  return (targetClass: { new(...args: any): any }) => {
    Object.getOwnPropertyNames(targetClass.prototype).forEach(name => {
      if(name !== 'constructor') {
        const path = Reflect.getMetadata('path', targetClass.prototype, name);
        const type: TMethodType = Reflect.getMetadata('type', targetClass.prototype, name);
        const methodFn = targetClass.prototype[name]
        if(path && type) {
          ControllerRouter.controllerRouter.app.context.rootRouter[type](filePath ? filePath + path : path, methodFn)
        }
      }
    })
  }
}

const methodFn = (type: string) => {
  return (realPath: string) => {
    return (targetClass: Object, methodName: string, desc: PropertyDescriptor) => {
      Reflect.defineMetadata('path', realPath, targetClass, methodName)
      Reflect.defineMetadata('type', type, targetClass, methodName)
    }
  }
}

const Get = methodFn('get')
const Post = methodFn('post')
const Put = methodFn('put')
const Delete = methodFn('delete')

export {
  Controller,
  Get,
  Post,
  Put,
  Delete,
}