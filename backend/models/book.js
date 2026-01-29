module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true } 
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
};