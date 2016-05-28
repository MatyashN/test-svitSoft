var todoModel = (function () {

  var _data = _read();

  function _addItem(name, duedate, description, completed) {
    _data.push({
      id: getCurrentId(),
      name: name,
      duedate: duedate,
      description: description,
      completed: completed
    });
  }

  function _removeItem(id) {
    _data.forEach(function (e, index) {
      if (e.id == id) {
        _data.splice(index, 1);
      }
    })
  }

  function _updateItem(id, name, duedate, description, completed) {
    _data.forEach(function (e, index) {
      if (e.id == id) {
        _data[index].id = id;
        _data[index].name = name;
        _data[index].duedate = duedate;
        _data[index].description = description;
        _data[index].completed = completed;
      }
    })
  }

  function _save() {
    window.localStorage["tasks"] = JSON.stringify(_data, function (key, val) {
      if (key == '$$hashKey') {
        return undefined;
      }
      return val
    });
  }

  function _read() {
    var temp = window.localStorage["tasks"]

    if (!temp) _data = [];
    else _data = JSON.parse(temp);

    return _data;
  }

  function getCurrentId() {
    var id;
    if (!_data || _data.length == 0) return 0;
    else return id = _data[_data.length - 1].id + 1 ;
  }
  

  return {
    data: _data,
    addItem: _addItem,
    updateItem: _updateItem,
    removeItem: _removeItem,
    save: _save
  };

})();