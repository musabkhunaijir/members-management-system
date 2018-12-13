const Joi = require('joi')
const BaseService = require('./BaseService')
const models = require('../models/index')
const UsersDao = require('../DAOs/UsersDao')

const usersModels = models.users;

const schema = {
  name: Joi.string().required(),
  state_id: Joi.number().required(),
  phone: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  role_id: Joi.number()
};

class UsersService extends BaseService {
  constructor() {
    super(usersModels);
  }

  findAll(where = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await new UsersDao().findAll(where)
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  create(user) {
    return new Promise(async (resolve, reject) => {
      try {
        let isError = this.validateInputs(user, schema);
        if (isError.error) {
          reject(isError.error.details[0].message)
          return;
        }

        const result = await super.create(user);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

}

module.exports = UsersService