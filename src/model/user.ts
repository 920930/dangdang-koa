import { sequelize } from "../config/db";
import { DataTypes, Model, Op } from "sequelize";

class User extends Model {

}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(30)
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(val: string) {
      this.setDataValue('password', val)
    },
    get(){
      const value = this.getDataValue('password');
      return value
    }
  },
  address: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, { sequelize, modelName: 'User' })

export {
  User
};