const api = require('../api/users');
const view = require('../view/user');
const { errorView } = require('../view/error');
const { Err } = require('../model/Error');
let { User } = require('../model/User');

const load = user => {
    let { id, name, username, email } = user;
    User = { id, name, username, email };
    return User;
};

const login = async (id) => {
    const user = await api.findUserById(id);
    if (!user) return errorView(Err.userNotFound);
    let User = load(user);
    return view.userHeroView(User);
};

const profile = async (userId) => {
    const user = await api.findUserById(userId);
    if (!user) return errorView(Err.pageNotFound);
    let User = load(user);
    return view.userView(User);
};

const search = async (username) => {
    const user = await api.findUserByUsername(username);
    if (!user) return errorView(Err.userNotFound);
    let User = load(user);
    return view.userSearchView(User);
};

module.exports = {
    login,
    profile,
    search
}