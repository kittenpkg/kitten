class JSON {
  constructor(file) {
    var jsonData = require('./' + file + '.json');
    return jsonData;
  }
  function getJsonObject(file,object) {
    return file[object]
  }
};
