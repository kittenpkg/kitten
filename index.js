var GitHub = require('github.js')
var ghdownload = require('github-download')

gh = new GitHub();

repo = gh.getRepositiory('kittenpkg','kitten');

function kitten(install) {
  this.getDownload(package) {
    ghdownload({user: 'kittenpkgs', repo: package, ref: 'master'}, process.cwd())
  }
};
