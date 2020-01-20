const PolicyModel = require('../models/Policy');
const UsersController = require('./UsersController');
const Boom = require('@hapi/boom')

exports.get = async function (req, res) {
    const filters = {}

    var name = req.query.name;

    const user = await UsersController.getByName(name)
    if (user || !name) {
        user ? filters.clientId = user.id : null
        const policies = await PolicyModel.find(filters)
        res.status(200).json(policies);
    } else {
        const { output } = Boom.badRequest('invalid user name')
        res.status(output.statusCode).json(output.payload);
    }

};

exports.getUserByPolicyNumber = async function (req, res) {
    const policy = await PolicyModel.findOne({ id: req.params.policyId })
    if (!policy) {
        const { output } = Boom.notFound('Policy not found')
        res.status(output.statusCode).json(output.payload);
    } else {
        const user = await UsersController.getById(policy.clientId)
        if (!user) {
            const { output } = Boom.notFound('User not found')
            res.status(output.statusCode).json(output.payload);
        }
        res.status(200).json(user)
    }
}