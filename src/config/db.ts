import path from 'path'
import { Sequelize } from 'sequelize-typescript';
import { dbconfig, type TDBConfig} from './DbConfig';

const { host, user, password, database, port} = dbconfig.getConfig() as TDBConfig;

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'mysql',
  define: { timestamps: false, freezeTableName: true }
})

sequelize.sync()
sequelize.addModels([path.join(process.cwd(), '/src/model/ts')])

export {
  sequelize
}