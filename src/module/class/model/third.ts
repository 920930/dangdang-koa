import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../../../config/db";
import { Second } from './second';

class Third extends Model {}

Third.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING
}, { sequelize, modelName: 'third' });

// Third.belongsTo(Second)
const arr = [
  { name: '图文故事', secondId: 1 },
  { name: '认知', secondId: 1 },
  { name: '益智游戏', secondId: 1 },
  { name: '纸板书', secondId: 1 },
  { name: '艺术课堂', secondId: 1 },
  { name: '入园准备', secondId: 1 },
  { name: '绘本', secondId: 2 },
  { name: '科普百科', secondId: 2 },
  { name: '少儿英语', secondId: 2 },
  { name: '乐高学习', secondId: 2 },
  { name: '入学准备', secondId: 2 },
  { name: '文学', secondId: 3 },
  { name: '科普百科', secondId: 3 },
  { name: '卡通动漫', secondId: 3 },
  { name: '童话', secondId: 3 },
]

// INSERT into dangdang.`third` VALUES(null, '图文故事',1), (null, '认知',1), (null, '益智游戏',1), (null, '纸板书',1), (null, '艺术课堂',1), (null, '入园准备',1), (null, '绘本',2), (null, '科普百科',2), (null, '少儿英语',2), (null, '乐高学习',2), (null, '入学准备',2), (null, '文学',3), (null, '卡通动漫',3), (null, '童话',3)

export {
  Third
}