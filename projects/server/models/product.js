"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.product_category, {
        foreignKey: "id_product",
      }),
        this.hasMany(models.cart_item, {
          foreignKey: "id_product",
        }),
        this.hasMany(models.transaction_item, {
          foreignKey: "id_product",
        });
    }
  }
  product.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: {
        type: DataTypes.STRING,
        unique: true,
      },
      stock: DataTypes.INTEGER,
      price: DataTypes.BIGINT,
      id_category: DataTypes.UUID,
      is_active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "product",
      createdAt: "created_at",
      updatedAt: "updated_at",
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ["image"],
        },
      ],
    }
  );
  return product;
};
