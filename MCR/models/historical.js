'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historical extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Historical.init({
    userId: DataTypes.INTEGER,
    game: DataTypes.STRING,
    hasil: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Historical',
  });
  return Historical;
};