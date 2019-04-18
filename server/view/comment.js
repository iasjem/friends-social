const pretty = require('pretty');

const commentView = Comment => pretty(`
        <div class="comment">
            <h2 class="comment__name">${Comment.name}</h2>
            <p class="comment__email">By ${Comment.email}</p>
            <p class="comment__body">${Comment.body}</p>
        </div>
    `);

const commentListView = Comments => {
    return pretty(Comments.map(comment => commentView(comment)).join(""));
};

module.exports = {
    commentView,
    commentListView
}