var login = require('./scenario/login');
var start = Date.now();
var config = require('./config/config');

login.login(config, start);