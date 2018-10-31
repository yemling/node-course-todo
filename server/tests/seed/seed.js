const jwt = require('jsonwebtoken');

const {
    Todo
} = require('./../../models/todo');
const {
    User
} = require('./../../models/user');
const {
    ObjectID
} = require('mongodb');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'gemma@test.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({
            _id: userOneId,
            access: 'auth'
        }, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'dave@example.com',
    password: 'userTwoPass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({
            _id: userTwoId,
            access: 'auth'
        }, 'abc123').toString()
    }]
}];

const todos = [{
        text: 'Go on holiday',
        _id: new ObjectID(),
        _creator: userOneId
    },
    {
        text: 'Second test todo',
        _id: new ObjectID(),
        completed: true,
        completedAt: 333,
        _creator: userTwoId
    }
];

const populateTodos = (done) => { //wipe all Todos and insert the seed test ones above.
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done()); //expression syntax
};

const populateUsers = ((done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
        return Promise.all([userOne, userTwo])
    }).then(() => done());
});

module.exports = {
    todos,
    populateTodos,
    users,
    populateUsers
};