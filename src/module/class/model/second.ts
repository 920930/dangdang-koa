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
Second.hasMany(Third, {
  foreignKey: 'secondId'
})

const arr = [
  {name: '0-2岁', firstId: 1 },
  {name: '3-6岁', firstId: 1 },
  {name: '7-10岁', firstId: 1 },
  {name: '11-14岁', firstId: 1 },
  {name: '文艺', firstId: 2 },
  {name: '人文社科', firstId: 2 },
  {name: '教育', firstId: 2 },
]
// INSERT into dangdang.`second` VALUES(null, '3-6岁',1), (null, '7-10岁',1), (null, '11-14岁',1), (null, '文艺',2), (null, '人文社科',2), (null, '教育',2)

type EleOfArr<T> = T extends Array<infer E> ? E : T;
type TSecond = EleOfArr<typeof arr>
type ItemType<T extends {}[]> = {
  [K in keyof EleOfArr<T>]: EleOfArr<T>[K]
}
type ResltType = ItemType<typeof arr>

const fn = <T extends ItemType<T>[], K extends keyof EleOfArr<T>>(t: T, ...keys: K[]) => {
  return t.map(item => {
    return keys.reduce((pre, cur, index) => {
      return {...pre, [keys[index]]: item[keys[index]]}
    }, {})
  })
}

fn(arr, 'firstId', 'name')


export {
  Second
}