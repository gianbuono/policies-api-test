const UserModel = require('../models/User');

exports.get = async function (req, res) {

    var filters = {}

    var name = req.query.name;
    var id = req.query.id;

    if(name) filters.name = name;
    if(id) filters.id = id;
    console.log(filters)
    const users = await UserModel.find({...filters})
    
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