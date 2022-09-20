const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};