import { Controller, Get, Post } from "../decorator"
import type { Context } from 'koa'
import { success } from "../common/result"
import { First } from "../module/class/model/first"
import { Second } from "../module/class/model/second"
import { Third } from "../module/class/model/third"

@Controller('/class')
class UserController {
  @Get('/')
  async index(ctx: Context){
    const first = await First.findAll();
    const second = await Second.findAll();
    const third = await Third.findAll();
    ctx.body = success({first, second, third})
  }
  @Get('/:id')
  async show(ctx: Context){
    ctx.body = 'class show'
  }
  @Post('/store')
  async store(ctx: Context){
    ctx.body = 'class store'
  }
}