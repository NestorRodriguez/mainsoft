
const Hash = require('../utils/hash');
const Validator = require('../utils/validator');


module.exports = (sequelize, DataTypes) => sequelize.define('roles', {

    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },

    codigo_rol: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
            customValidator(value) {
                if (!value) {
                    throw new Error("El Codigo del rol no debe de estar vacio")
                }
            },
        }
    },

    nombre_rol: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
            customValidator(value) {
                if (!value) {
                    throw new Error("El Nombre del Rol no debe de estar vacio")
                }
            },
        }

    }

},{
    timestamps: false,
});