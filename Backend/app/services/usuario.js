const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Hash = require('../utils/hash');
const Database = require('../../app/database');
const Model = Database.import('../models/usuario');
const Service = require('./service');

class UsuarioService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "nombre", "documento", "correo", "telefono", "contrasena", "descripcion", "carga_hv", "idProfile"]
            },
            one: {
                attributes: ["id", "nombre", "documento", "correo", "telefono", "contrasena", "descripcion", "carga_hv", "idProfile"]
            },
            all: {
                attributes: ["id", "nombre", "documento", "correo", "telefono", "contrasena", "descripcion", "carga_hv", "idProfile"]
            },
        };
        super(Model, modelOptions);
    }

    async login(nombre, contrasena) {
        try {
            const usuarios = await this.model.scope('withPassword').findOne({
                where: {
                    [Op.or]: [{ nombre: nombre }, { correo: nombre }]
                }
            });

            if(usuarios && contrasena) {
                if(usuarios.active){
                    const isValid = await Hash.validateHash(contrasena, usuarios.contrasena);
                    if(isValid){
                        const userData = {
                            id: user.id,
                            nombre: user.nombre,
                            email: user.email,
                            documento: user.documento,
                            correo: user.correo,
                            telefono: user.telefono,
                            descripcion: user.descripcion,
                            carga_hv: user.carga_hv,
                            descripcion: user.descripcion
                        };
                        return Response.success(userData);
                    } else {
                        await Promise.reject(Response.error(Messages('LOGIN_NOT_EXIST'), 404));
                    }
                } else {
                    await Promise.reject(Response.error(Messages('LOGIN_INACTIVE'), 403));
                }
            } else {
                await Promise.reject(Response.error(Messages('LOGIN_NOT_EXIST'), 404));
            }
        } catch (error) {
            Logger.error(`[action: login][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
            await Promise.reject(Response.error(error.error || Messages('LOGIN_ERROR'), error.status || 500));

        }
    }

}

module.exports = UsuarioService;



