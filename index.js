var GitHub = require('github.js')
var ghdownload = require('github-download')

gh = new GitHub();

repo = gh.getRepositiory('kittenpkg','kitten');

function kitten(install) {
  ghdownload({user: 'kittenpkg', repo: 'kitten', ref: install}, process.cwd())
};
