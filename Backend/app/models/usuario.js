
const Hash = require('../utils/hash');
const Validator = require('../utils/validator');


module.exports = (sequelize, DataTypes) => sequelize.define('usuarios', {

    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        // autoIncrement: true,
        primaryKey: true,
    },

    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {

            notNull: {
                msg: 'El nombre es requerido'
            },

            // leng: {
            //     args: [5, 100],
            //     msg: 'El nombre se debe manejar con minimo de 5 a 100 caracteres'
            // },
            customValidator(value) {
                if (!value) {
                    throw new Error("El nombre no debe de estar vacio")
                }
            },
        }
    },

    documento: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notNull: {
                msg: 'El numero de documento es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("El Documento no debe de estar vacio")
                }
            },

        }
    },

    correo: {
        type: DataTypes.STRING(50),
        allowNull:false,
        validate: {
            isEmail: {
                args: true,
                msg: "El correo electronico no es valido"
            },
            notNull: {
                msg: "El correo electronico es requerido"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("El Documento no debe de estar vacio")
                }
            },
            // isUnique: function (email, next) {
            //     const self = this;
            //     return Validator.isUnique('../models/usuario.js', self, next, { email }, 'correo electrónico está asociado a otro usuario');
            // }
        },
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notNull: {
                msg: 'perfil de usuario es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("El telefono no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("El telefono debe ser numérico");
                }
            },
        }
    },

    contrasena: {
        type: DataTypes.STRING(12),
        allowNull:false,
        validate: {
            notNull: {
                msg: 'contraseña es requerida'
            },
            len: {
                args: [6, 12],
                msg: "contraseña debe tener minimo 6 y máximo 12 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("contraseña no debe estar vacía");
                }
            },
        }
    },

    descripcion: {
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

    carga_hv: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    roles_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
    },
        
},{
    timestamps: false,
});
