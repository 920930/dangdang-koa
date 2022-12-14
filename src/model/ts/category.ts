import { Column, Table, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'

@Table({
  tableName: 'category'
})
export default class Category extends Model<Category>{
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataTypes.INTEGER,
  })
  id!: number

  @Column({
    type: DataTypes.STRING,
  })
  name!: string
}