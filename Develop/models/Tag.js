// Imports from sequelize library
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
// Extends the Tag Class off of the Model Class
class Tag extends Model {}
// Provides parameters for the class
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
