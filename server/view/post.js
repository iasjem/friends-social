const pretty = require('pretty');

const postView = Post => pretty(`
    <div class="post">
        <h2 class="post__title">
            <a href="/posts/${Post.id}">${Post.title}</a>
        </h2>
        <p class="post__author">
            By <a href="/user/${Post.userId}">${Post.author}</a>
        </p>
        <p class="post__body">${Post.body}</p>
    </div>
`);

const postsView = Post => pretty(`
    <div class="post">
        <h2 class="post__title">
            <a href="/posts/${Post.id}">${Post.title}</a>
        </h2>
        <p class="post__body">${Post.body}</p>
    </div>
`);

const postListView = Posts => {
    return pretty(Posts.map(post => postsView(post)).join(""));
};

module.exports = {
    postView,
    postsView,
    postListView
}