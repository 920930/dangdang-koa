import { Controller, Get, Post } from "../decorator"
import type { Context } from 'koa'

@Controller('/app')
class UserController {
  @Get('/user')
  async index(ctx: Context){
    ctx.body = 'user index'
  }
  @Post('/store')
  async store(ctx: Context){
    ctx.body = 'user store'
  }
}