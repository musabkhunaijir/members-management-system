const BaseDao = require('./BaseDao')
const models = require('../models/index')
const usersModel = models.users;

const include = [{
  model: models.states,
  as: 'state'
}];

class UsersDao extends BaseDao {
  constructor() {
    super(usersModel)
  }

  findAll(where = {}) {
    let options = {
      where: where,
      include: include
    };

    return new Promise(async (resolve, reject) => {
      try {
        const result = await super.findAll(where, include)
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

}

module.exports = UsersDao