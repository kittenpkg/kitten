var GitHub = require('github.js')
var ghdownload = require('github-download-repo')

var gh = new GitHub();

var args = process.argv.slice(2)

function kitten() {
  this.getDownload = function(package) {
    ghdownload(gh.getRepository('kittenpkgs',package),'./node-modules')
  };
};

if (args.length == 0) {
  print('ERROR: No arguments found.')
} elseif (args.length > 1) {
  print('ERROR: Invalid arguments.')
};

if (args[0] == 'install') {
  kitten().getDownload(args[1])
};
