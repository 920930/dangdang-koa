import Koa from 'koa';
import { koaBody } from 'koa-body';
import KoaJson from 'koa-json';

import ControllerRouter from './common/ControllerRouter';
import errorMiddleware from './middleware/error.middleware';

const app = new Koa();
app.use(koaBody());
app.use(KoaJson());

app.use(errorMiddleware)
ControllerRouter.controllerRouter.init(app)


app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})