const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, { through: 'Likes', foreignKey: 'dishesId' });
    }
  }
  Dish.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    instruction: DataTypes.TEXT,
    time: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Dish',
  });
  return Dish;
};
