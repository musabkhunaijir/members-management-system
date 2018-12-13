const Joi = require('joi');
const BaseDao = require('../DAOs/BaseDao');

class BaseService extends BaseDao {
  constructor(model) {
    super(model);
  }

  validateInputs(data, schema) {
    return Joi.validate(data, schema)
  }

}

module.exports = BaseService;