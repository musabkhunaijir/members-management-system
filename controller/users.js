const sha1 = require('sha1')
const colors = require('colors')
const UsersService = require('../services/UsersService')

exports.list = (req, response, next) => {
  const where = {
    user_id: 14
  }

  new UsersService().findAll()
    .then((result) => {
      req.users = result;
      next();
    }).catch((error) => {
      response.status(500).send(error);
      console.log('\n---------------- error ----------------\n'.red, error);
    });
}

exports.findById = (req, response, next) => {
  const user_id = req.query.user_id;

  new UsersService().findById(user_id)
    .then((result) => {
      req.result = result;
      next();
    }).catch((error) => {
      response.status(500).send(error);
      console.log('\n---------------- error ----------------\n'.red, error);
    });
}

exports.findOne = (req, response, next) => {
  const userId = req.params.user_id;

  new UsersService().findOne({
      where: {
        user_id: userId
      }
    })
    .then((result) => {
      if (!result) {
        response.status(404).send('not found');
        return;
      }
      req.user = result;
      next();
    }).catch((error) => {
      response.status(500).send(error);
      console.log('\n---------------- error ----------------\n'.red, error);
    });
}

exports.create = (req, response, next) => {
  const roleId = req.body.role_id;

  const user = {
    name: req.body.name,
    state_id: req.body.state_id,
    phone: req.body.phone,
    email: req.body.email,
    password: sha1(req.body.password)
  };

  if (roleId) {
    user.role_id = 1
  } else {
    user.role_id = 2
  }

  new UsersService().create(user)
    .then((result) => {
      req.result = result;
      next();
    }).catch((error) => {
      response.status(500).send(error);
      console.log('\n---------------- error ----------------\n'.red, error);
    });
}

exports.update = (req, response, next) => {
  const roleId = req.body.role_id;

  const user = {
    name: req.body.name,
    state_id: req.body.state_id,
    phone: req.body.phone,
    email: req.body.email,
    password: sha1(req.body.password)
  };

  if (roleId) {
    user.role_id = 1
  } else {
    user.role_id = 2
  }

  const where = {
    user_id: req.params.user_id
  }

  new UsersService().update(user, where)
    .then((result) => {
      req.result = result;
      next();
    }).catch((error) => {
      response.status(500).send(error);
      console.log('\n---------------- error ----------------\n'.red, error);
    });
}

exports.login = (req, response, next) => {
  const where = {
    name: req.body.name,
    password: sha1(req.body.password)
  }

  new UsersService().findOne({
      where: where
    })
    .then((result) => {
      if (!result) {
        response.render('login', {
          date: new Date(),
          error: 'المستخدم غير موجود'
        });
        return;
      } else {

        //set only the needed user attributes
        const user = {
          user_id: result.user_id,
          name: result.name,
          role_id: result.role_id,
          state_id: result.state_id
        }

        req.session.user = user;
        response.locals.user = user;
        next();
      }
    }).catch((error) => {
      response.status(500).send(error);
      console.log('\n---------------- error ----------------\n'.red, error);
    });
}