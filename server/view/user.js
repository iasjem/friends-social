const pretty = require('pretty');

const userHeroView = User => pretty(`
        <h1>Welcome ${User.username}!</h1>
    `);

const userView = User => pretty(`
        <div class="profile">
            <h2>${User.name}</h2>
            <p class="username">@${User.username}</p>
        </div>
    `);

const userSearchView = User => pretty(`
        <div class="user-search">
            <h2>${User.name}</h2>
            <p class="username">@${User.username}</p>
        </div>
    `);