const UserModel = require('../models/User');

exports.get = async function (req, res) {
    const users = await UserModel.find()

    res.status(200).json(users);
};

exports.getByName = async function (name) {
    const user = await UserModel.findOne({ name: name })

    return user
};

exports.getById = async function (id) {
    const user = await UserModel.findOne({ id: id })

    return user
};