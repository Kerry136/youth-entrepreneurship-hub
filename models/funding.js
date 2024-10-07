const { DataTypes } = require('sequelize');
const sequelize = require('../index.js').sequelize;

const Funding = sequelize.define('Funding', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER, // Changed to INTEGER for proper amount
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Funding;
