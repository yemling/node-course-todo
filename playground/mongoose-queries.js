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

var id = '5b8eb40258671202840e7321';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
};
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('ID not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => //console.log(e)//horrid long error string
    console.log('ID invalid')
);

User.findById('5b6d9cc334efa32094b8b824').then((user) => {
        if (!user) {
            return console.log('ID not found');
        }
        console.log('User by id', user);
    }, (e) => {
        console.log('ID invalid')
    }

);