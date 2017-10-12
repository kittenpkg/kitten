jsonData = require('./version.json');

function kitten() {
  return jsonData.major + "." + jsonData.minor + "." + jsonData.release + ":" + jsonData.pre
};
