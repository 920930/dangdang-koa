import path from 'path';
import fs from 'fs';
import type Koa from 'koa';
import KoaRouter from 'koa-router'

export default class ControllerRouter {
  static controllerRouter: ControllerRouter = new ControllerRouter()
  app!: Koa
  router: KoaRouter = new KoaRouter()

  async init(app: Koa){
    this.app = app
    this.app.use(this.router.routes())
    const list = this.getFilePath();
    this.getRouteInfo(list);
  }

  getFilePath(){
    const filePath = path.join(process.cwd() + '/src/controller');
    const files = fs.readdirSync(filePath)
    const list: string[] = [];
    files.forEach(file => {
      const arr = file.split('.')
      if(arr.includes('controller')) {
        list.push(`${filePath}\\${file}`)
      }
    })
    return list;
  }

  getRouteInfo(list: string[]){
    // 通过import()方法引入文件，引入文件后 无需其他操作，装饰器自动执行
    list.forEach(item => import(item))
  }
}