const { authService } = require("../services");

async function login(req, res) {
  try {
    const { identifier, password } = req.body;
    const user = await authService.login(identifier, password);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function register(req, res) {
  try {
    const { name, username, email, phone, password } = req.body;

    const user = await authService.register(
      name,
      username,
      email,
      phone,
      password
    );

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  login,
  register,
};
