import { Controller, Get, Post } from "../decorator"
import type { Context } from 'koa'

@Controller('user.controller')
class UserController {
  @Get('/user')
  async index(ctx: Context){
    return 'index'
  }
  @Post('/store')
  async store(ctx: Context){
    return 'store'
  }
}