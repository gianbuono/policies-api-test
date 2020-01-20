const axios = require('axios');
const UserModel = require('./models/User')
const PolicyModel = require('./models/Policy')

async function getUsers() {
    try {
        const response = await axios.get(process.env.CLIENTS_LIST_URL);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

async function getPolicies() {
    try {
        const response = await axios.get(process.env.POLICIES_LIST_URL);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

const seeder = async () => {
    const userList = await getUsers();
    const policyList = await getPolicies();
    const users = await UserModel.find().exec();
    const policies = await PolicyModel.find().exec();
    
    if (users.length == 0) {
        UserModel.insertMany(userList.clients, (error, docs) => {
            console.log('Inserted ' + docs.length + ' users');
        })
    } else {
        console.log(users.length + ' users found')
    }

    if (policies.length == 0) {
        PolicyModel.insertMany(policyList.policies, (error, docs) => {
            console.log('Inserted ' + docs.length + ' policies');
        })
    } else {
        console.log(users.length + ' policies found')
    }

    return;
}

module.exports = seeder