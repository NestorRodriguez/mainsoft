const Validator = require('../utils/validator');
const Hash = require('../utils/hash');




module.exports = (sequelize, DataTypes) => sequelize.define('profiles', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },

    nombre_oferta: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'nombre es requerido'
            },
            len: {
                args: [5, 20],
                msg: "nombre debe tener minimo 3 y máximo 20 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("nombre no debe estar vacío");
                }
            },
            isUnique: function (name, next) {
                const self = this;
                return Validator.isUnique('../models/profile.js', self, next, { name }, 'nombre está asociado a otro perfil');
            }
        }
    },

    descripcion_oferta: {
        type: DataTypes.STRING(600),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("La descripcion no debe de estar vacia");
                }
            },
        }
    },

    estado: {
        type: DataTypes.STRING(20)
    }
});