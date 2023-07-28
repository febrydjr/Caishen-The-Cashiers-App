"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class transaction_item extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    transaction_item.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            id_transaction: DataTypes.UUID,
            id_product: DataTypes.UUID,
            price: DataTypes.BIGINT,
            qty: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "transaction_item",
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return transaction_item;
};
