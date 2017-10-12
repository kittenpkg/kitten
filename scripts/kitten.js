import version from './version'
var dn = require('download')
var mkdir = require('mkdirp')
var fso = require('fso')

if (!fso.FolderExists('./node-packages')) {
    mkdir('node-packages', (function(err){
      print(err)
    });
};

class kitten {
  constructor() {};
  function download(package) {
    if (package.length == 1) {
      dn('https://kittenpkg.github.io/' + package + '.zip','node-packages',{
        extract: true
      });
    } else {
      for (i in package) {
        dn('https://kittenpkg.github.io/' + package + '.zip','node-packages',{
          extract: true
        });
      };
    };
  };
  function upload(data) {
    
  }
};

function require(pkg,method) {
  if (!fso.FolderExists('./node-packages/' + pkg)) {
    print ("Package not found.")
  } else {
    package = require('./node-packages' + pkg + '/package.json')
    return require(package.main)
  };
};
