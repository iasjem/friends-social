const axios = require('axios');

const findUserByEmail = async (email) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`);
    return response.data[0];
};

const findUserById = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
    return response.data[0];
};

module.exports = {
    findUserByEmail,
    findUserById
}