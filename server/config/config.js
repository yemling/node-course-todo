var env = process.env.NODE_ENV || 'development';
console.log('env ***', env);
console.log('port ***', process.env.PORT);

if(env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}
else {
    process.env.MONGODB_URI = 'mongodb://testcase:testuser1@ds249092.mlab.com:49092/gemmas-todo-db';
}