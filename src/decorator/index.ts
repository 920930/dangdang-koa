import 'reflect-metadata'

const Controller = (filePath: string) => {
  return (targetClass: { new(...args: any): any }) => {
    Object.getOwnPropertyNames(targetClass.prototype).forEach(name => {
      if(name !== 'constructor') {
        console.log(Reflect.getMetadata('path', targetClass.prototype, name))
        console.log(Reflect.getMetadata('type', new targetClass(), name))
      }
    })
  }
}

const methodFn = (type: string) => {
  return (realPath: string) => {
    return (targetClass: Object, methodName: string, desc: PropertyDescriptor) => {
      Reflect.defineMetadata('path', realPath, targetClass, methodName)
      Reflect.defineMetadata('type', type, targetClass, methodName)
      desc.value()
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