const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //make mongoose use its own promise function
let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://testcase:testuser1@ds249092.mlab.com:49092/gemmas-todo-db'
}
mongoose.connect(process.env.PORT ? db.mlab : db.localhost, { useNewUrlParser: true });

module.exports = {mongoose};