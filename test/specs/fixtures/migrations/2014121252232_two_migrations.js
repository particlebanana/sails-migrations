definition = {
  first_name: {type: 'STRING'},
  last_name: {type: 'STRING'},
  id: {
    type: 'INTEGER',
    autoIncrement: true,
    defaultsTo: 'AUTO_INCREMENT',
    primaryKey: true
  }
}

exports.up = function(adapter, done) {
  adapter.define('two_migrations', definition, function(err, schema){
    done(err);
  });
};

exports.down = function(adapter, done) { 
  done();
};

