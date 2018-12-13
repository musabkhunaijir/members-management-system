const constants = require('../config/constants');

exports.isLoggedIn = (req, response, next) => {
  if (req.session.user) {
    next();
  } else {
    response.redirect('/users/login');
  }
}

exports.isAdminOrItManager = (req, response, next) => {
  const roleId = req.session.user.role_id;

  if (roleId == constants.ADMIN || roleId == constants.IT_MANAGER) {
    next();
  } else {
    response.status(404).send('غير مصرح!');
  }
}

exports.isAdmin = (req, response, next) => {
  const roleId = req.session.user.role_id;

  if (roleId && roleId == constants.ADMIN) {
    next();
  } else {
    response.status(404).send('غير مصرح!');
  }
}