import { Controller, Get } from "../decorator"
import type { Context } from 'koa'

@Controller()
class UserController {
  @Get('/user')
  async index(ctx: Context){
    console.log('index')
  }
}