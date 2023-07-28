"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_categories extends Model {
    static associate(models) {
      this.belongsTo(models.product, {
        foreignKey: "id_product",
      }),
        this.belongsTo(models.category, {
          foreignKey: "id_category",
        });
    }
  }
  product_categories.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      id_product: DataTypes.UUID,
      id_category: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product_category",
    }
  );
  return product_categories;
};
