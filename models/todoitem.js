'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoItem extends Model {
    static associate(models) {
      TodoItem.belongsToMany(models.TodoList, {
        through: 'TodoListItems',
        foreignKey: 'todoItemId',
      });
    }
  }
  TodoItem.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    isCompleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TodoItem',
  });
  return TodoItem;
};