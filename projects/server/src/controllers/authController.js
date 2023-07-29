const { messages } = require("../helpers");
const { authService } = require("../services");

async function forgotPassword(req, res) {
    try {
        const {email} = req.body;
        const result = await authService.forgotPassword(email);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
