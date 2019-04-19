const axios = require('axios');

const findUserByEmail = async (email) => {
    const response = await axios.get(`${process.env.API_BASE_URL}users?email=${email}`);
    return response.data[0];
};

const findUserById = async (id) => {
    const response = await axios.get(`${process.env.API_BASE_URL}users?id=${id}`);
    return response.data[0];
};

const findUserByUsername = async (username) => {
    const response = await axios.get(`${process.env.API_BASE_URL}users?id=${id}`);
    return response.data[0];
};

module.exports = {
    findUserByEmail,
    findUserById,
    findUserByUsername
}