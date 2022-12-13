import type { ParameterizedContext, Next } from 'koa';

export default async (ctx: ParameterizedContext, next: Next) => {
  const a: any = 123
  try {
    a()
  } catch (err: any) {
    console.log(err.message)
    ctx.body = err.message
  }
  
  // await next();
  console.log(11111111)
}