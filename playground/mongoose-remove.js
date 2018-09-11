const {
    ObjectID
} = require('mongodb');
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');

const {
    User
} = require('./../server/models/user');

/* Todo.remove({}).then((res) => {
    console.log(res)
}); */

/* 
Same as below, but allows you to provide more checks on the object you want to delete.
Todo.findByIdAndRemove({id:'5b9787f968c0dc526695c8b1'}).then((todo) => {
    console.log(todo);
}); */

Todo.findByIdAndRemove('5b9787f968c0dc526695c8b1').then((todo) => {
    console.log(todo);
});