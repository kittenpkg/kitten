jsonData = require('./version.json');

function getVersion() {
  return jsonData.major + "." + jsonData.minor + "." + jsonData.release + ":" + jsonData.pre
};
