const {
  registerUser,
  loginUser,
} = require("../services/authService");


// Register Controller
exports.register = async (req, res, next) => {
  try {

    const user = await registerUser(req.body);

    res.status(201).json(user);

  } catch (error) {
    next(error);
  }
};


// Login Controller
exports.login = async (req, res, next) => {
  try {

    const { email, password } = req.body;

    const user = await loginUser(
      email,
      password
    );

    res.status(200).json(user);

  } catch (error) {
    next(error);
  }
};