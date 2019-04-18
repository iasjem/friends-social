const pretty = require('pretty');

const postView = Post => pretty(`
        <div class="post">
            <h2 class="post__title">${Post.title}</h2>
            <p class="post__author">
                <a href="/user/${Post.userId}">${Post.userId}</a>
            </p>
            <p class="post__body">${Post.body}</p>
        </div>
    `);

const postListView = Posts => {
    return pretty(Posts.map(post => postView(post)).join(""));
};

module.exports = {
    postView,
    postListView
}