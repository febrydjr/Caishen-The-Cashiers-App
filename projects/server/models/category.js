"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    static associate(models) {
      this.hasMany(models.product_category, { foreignKey: "id_category" });
    }
  }
  categories.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "category",
      timestamps: false,
    }
  );
  return categories;
};
