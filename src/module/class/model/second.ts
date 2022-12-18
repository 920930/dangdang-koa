import { DataTypes } from 'sequelize';
import { sequelize } from "../../../config/db";
import { First } from './first';
import { Third } from './third';

const Second = sequelize.define('second', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
}, {});

// Second.belongsTo(First)
Second.hasMany(Third)

const arr = [
  {name: '0-2岁'},
  {name: '3-6岁'},
  {name: '7-10岁'},
  {name: '11-14岁'},
  {name: '文艺'},
  {name: '人文社科'},
  {name: '教育'},
]

export {
  Second
}