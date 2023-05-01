'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoList extends Model {
    static associate(models) {
      TodoList.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      TodoList.belongsToMany(models.TodoItem, {
        through: 'TodoListItems',
        foreignKey: 'todoListId',
      });
    }
  }
  TodoList.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TodoList',
  });
  return TodoList;
};