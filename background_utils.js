(function(){
  var import_data_from_json, out$ = typeof exports != 'undefined' && exports || this;
  out$.import_data_from_json = import_data_from_json = function(jsonfile){
    return $.getJSON(jsonfile, function(jsondata){
      return get_field_info(function(field_info){
        var output, field, info, type;
        output = {};
        for (field in field_info) {
          info = field_info[field];
          type = info.type;
          if (jsondata[field] != null && (type === 'var' || type === 'list')) {
            output[field] = jsondata[field];
          }
        }
        return console.log(output);
      });
    });
  };
}).call(this);
