const errorView = Err => `
        <div class="post__box">
            <h2 class="post__title">${Err.title}</h2>
            <p class="post__body">${Err.message}</p>
        </div>
    `;

module.exports = {
    errorView
}