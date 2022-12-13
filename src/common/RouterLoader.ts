import path from 'path';
import fs from 'fs';
import type Koa from 'koa';
import KoaRouter from 'koa-router'

export default class RouterLoader {
  static routerLoader: RouterLoader = new RouterLoader()
  app!: Koa
  router: KoaRouter = new KoaRouter()
  async init(app: Koa){
    this.app = app
    this.app.use(this.router.routes())
    const list = this.getFilePath();
    this.getRouteInfo(list);
  }
  getFilePath(){
    // const dir2 = path.join(__dirname, '../rouetr');
    const dir = path.join(process.cwd(), '/src/router');
    const files = fs.readdirSync(dir);
    const list: string[] = [];
    files.forEach(item => list.push(`${dir}\\${item}`))
    return list;
  }
  isRouter(data: any): data is KoaRouter{
    return data instanceof KoaRouter
  }
  async getRouteInfo(list: string[]){
    list.forEach(async (item) => {
      const fl = await import(item)
      const fileRouter = fl.default;
      if(this.isRouter(fileRouter)) {
        this.router.use(fileRouter.routes(), fileRouter.allowedMethods())
      }
    })
  }
}