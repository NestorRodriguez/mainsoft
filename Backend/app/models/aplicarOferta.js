const Validator = require('../utils/validator');
const Hash = require('../utils/hash');


module.exports = (sequelize, DataTypes) => sequelize.define('aplicar_oferta', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },

    registro_oferta_id: {
        type: DataTypes.INTEGER.UNSIGNED,
    },

    usuarios_id: {
        type: DataTypes.INTEGER.UNSIGNED,
    },

});