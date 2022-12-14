import type { ParameterizedContext, Next } from 'koa';

export default async (ctx: ParameterizedContext, next: Next) => {
  try {
    await next()
  } catch (err: any) {
    ctx.body = err.message
  }
}