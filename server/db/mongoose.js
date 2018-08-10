const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //make mongoose use its own promise function
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose};