import { DataTypes } from 'sequelize';
import { sequelize } from "../../../config/db";

import { Second } from './second';

const First = sequelize.define('first', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING
}, {});

First.hasMany(Second, {
  foreignKey: 'firstId'
})

const arr = [
  {name: '童书'},
  {name: '电子书'},
  {name: '女装'},
  {name: '食品'},
  {name: '男装'},
  {name: '数码相机'},
  {name: '创意文具'},
  {name: '童装童鞋'},
]
export {
  First
}