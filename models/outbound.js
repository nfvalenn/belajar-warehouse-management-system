//const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const outbound = sequelize.define('outbound', {
        id: {
            type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
          },
          products: {
            type: DataTypes.STRING,
            allowNull: false
          },
          date: {
            type: DataTypes.STRING,
            allowNull: false
          },
          qty: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          location: {
            type: DataTypes.STRING,
            allowNull: false
          },
          building: {
            type: DataTypes.STRING,
            allowNull: false
          },
          room: {
            type: DataTypes.STRING,
            allowNull: false
          },
          floor: {
            type: DataTypes.STRING,
            allowNull: false
          },
          area: {
            type: DataTypes.STRING,
            allowNull: false
          },
          rack: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          rack_level: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
        }, {
            tableName: 'outbound'
        });
    return outbound;
}