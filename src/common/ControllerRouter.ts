import path from 'path';
import fs from 'fs';
import type Koa from 'koa';
import KoaRouter from 'koa-router'

export default class ControllerRouter {
  app!: Koa
  router: KoaRouter = new KoaRouter()
  static controllerRouter = new ControllerRouter()

  init(app: Koa){
    this.app = app;
    this.router.prefix('/api')
    this.app.use(this.router.routes())
    this.app.context.rootRouter = this.router
    const list = this.getFilePath()
    this.getConRouter(list)
  }

  getFilePath(){
    const filePath = path.join(process.cwd(), '/src/controller');
    const files = fs.readdirSync(filePath)
    const list: string[] = []
    files.forEach(item => {
      const arr = item.split('.')
      if(arr.includes('controller')) {
        list.push(`${filePath}\\${item}`)
      }
    })
    return list;
  }

  getConRouter(list: string[]){
    list.forEach(item => import(item))
  }
}