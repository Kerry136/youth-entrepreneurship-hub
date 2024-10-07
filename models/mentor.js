const { DataTypes } = require('sequelize');
const sequelize = require('../index.js').sequelize;

const Mentor = sequelize.define('Mentor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    expertise: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Mentor;
