let { User } = require('../model/User');

const login = async (findCallback) => {
    const user = await findCallback;
    if (!user) return 
    let { id, name, username, email } = user;
    User = { id, name, username, email };
    return User;
};

module.exports = {
    login
}