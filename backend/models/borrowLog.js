module.exports = (sequelize, DataTypes) => {
    return sequelize.define('BorrowLog', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        borrowDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        latitude: {
            type: DataTypes.FLOAT, // Menyimpan koordinat desimal
            allowNull: false
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });
};