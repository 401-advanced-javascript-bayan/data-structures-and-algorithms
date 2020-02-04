users.authenticateBasic(user, password)
.then(validUser => {
  req.token = users.generateToken(validUser);
  console.log('token:', req.token);
  next();
}).catch( err => next('invalid login'));
}