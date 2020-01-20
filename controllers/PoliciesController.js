const PolicyModel = require('../models/Policy');
const UsersController = require('./UsersController');

//Simple version, without validation or sanitation
exports.get = async function (req, res) {
    const policies = await PolicyModel.find()

    res.status(200).json(policies);
};