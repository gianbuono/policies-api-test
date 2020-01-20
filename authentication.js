
const UserModel = require('./models/User');

module.exports = async (req, res, next) => {
    try {
        const auth = req.headers.auth;

        if (!auth) {
            res.status(401).json({ error: 'No auth provided' });
        }
        else {
            const user = await UserModel.findOne({ name: req.headers.auth })
            if (!user) {
                res.status(400).json({ error: 'User doesn\'t exists' });
            }
            req.userRole = user.role

            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};