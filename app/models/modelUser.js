mongoose = require('mongoose');

module.exports = function(){

  var schema = mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      reqired: true
    },
    firstname: {
      type: String,
      required: true,
      
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    passport: {
      type: String,
      required: true
    },
    birthplace: {
      type: String,
      required: true
    }
  });
  return mongoose.model('users',schema);
};
