import { Controller, Get, Post } from "../decorator"
import type { Context } from 'koa'

@Controller('/user')
class UserController {
  @Get('/')
  async index(ctx: Context){
    ctx.body = 'user index'
  }
  @Get('/:id')
  async show(ctx: Context){
    ctx.body = 'user show'
  }
  @Post('/store')
  async store(ctx: Context){
    ctx.body = 'user store'
  }
}