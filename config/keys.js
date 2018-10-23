//keys.js - logic
if (process.env.NODE_ENV === 'production') {
  //we are in production - return the prod set of keys
  module.exports = require ('./prod');
} else {
  //we are in developlment - return the dev keys
  module.exports = require ('./dev');
}
