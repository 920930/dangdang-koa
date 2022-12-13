import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { dbconfig, type TDBConfig} from './DbConfig';

class DB {
  static db = new DB()
  sequelize: Sequelize
  constructor(){
    this.init()
  }
  init(){
    this.initConfig('mysql')
  }
  initConfig(dialect: Dialect){
    const { host, user, password, database, port} = dbconfig.getConfig() as TDBConfig;
    this.sequelize = new Sequelize(database, user, password, {
      host,
      port,
      dialect,
      define: { timestamps: false, freezeTableName: true }
    })
  }
}

export const { db } = DB;