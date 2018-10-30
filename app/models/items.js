module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Item;
}