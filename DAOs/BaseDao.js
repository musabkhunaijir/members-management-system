class BaseDao {
  constructor(model) {
    this.model = model;
  }

  findAll(where = {}, include = []) {
    const that = this;

    let options = {
      include: include,
      where: where
    }

    return new Promise((resolve, reject) => {
      that.model.findAll(options)
        .then((result) => {
          resolve(result);
        }).catch((error) => {
          reject(error);
        });
    });
  }

  findById(id, options) {
    const that = this;

    return new Promise((resolve, reject) => {
      that.model.findById(id, options)
        .then((result) => {
          resolve(result);
        }).catch((error) => {
          reject(error);
        });
    });
  }

  findOne(where = {}) {
    const that = this;

    return new Promise((resolve, reject) => {
      that.model.findOne(where)
        .then((result) => {
          resolve(result);
        }).catch((error) => {
          reject(error);
        });
    });
  }

  create(data) {
    const that = this;

    return new Promise((resolve, reject) => {
      that.model.create(data)
        .then((result) => {
          resolve(result);
        }).catch((error) => {
          reject(error);
        });
    });
  }

  update(attributes, where = {}) {
    const that = this;

    return new Promise((resolve, reject) => {
      that.model.update(attributes, {
          where: where
        })
        .then((result) => {
          resolve(result);
        }).catch((error) => {
          reject(error);
        });
    });
  }

  delete(where = {}) {
    const that = this;

    return new Promise((resolve, reject) => {
      that.model.destroy({
          where: where
        })
        .then((result) => {
          resolve(result);
        }).catch((error) => {
          reject(error);
        });
    });
  }

}

module.exports = BaseDao