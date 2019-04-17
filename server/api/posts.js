const axios = require('axios');

const findAllPosts = async () => {
    const response = await axios.get(`${process.env.API_BASE_URL}posts`);
    return response.data[0];
};

const findPostByID = async (postID) => {
    const response = await axios.get(`${process.env.API_BASE_URL}posts?id=${postID}`);
    return response.data[0];
};

const findPostByUser = async (userID) => {
    const response = await axios.get(`${process.env.API_BASE_URL}posts?userId=${userID}`);
    return response.data[0];
};

module.exports = {
    findAllPosts,
    findPostByID,
    findPostByUser
}   