import 'reflect-metadata'

const Controller = () => {
  return (target: { new(...args: any): any }) => {
    const tar = new target();
  }
}

const methodFn = (type: string) => {
  return (realPath: string) => {
    return (target: Object, methodName: string, desc: PropertyDescriptor) => {
      Reflect.defineMetadata('path', realPath, target, methodName)
      Reflect.defineMetadata('type', type, target, methodName)
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