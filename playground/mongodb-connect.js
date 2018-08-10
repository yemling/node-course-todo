//const MongoClient = require('mongodb').MongoClient;

//object destructuring ES6, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
const {MongoClient, ObjectID} = require('mongodb');

/* 
Create MongoDb ObjectID on the fly
var obj = new ObjectID();
console.log(obj); */

/* var user = {name: 'Gemma', age: 25};
var {name} = user;
console.log(name); */

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser:true}, (error, client) => {
    if(error) {
        //use return to prevent rest of function running if error.
        return console.log('Unable to connect to MongoDB server');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    /* db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert to do', err);
        };
        console.log(JSON.stringify(result.ops, undefined, 2));
    }) */
    //can pass _id or let mongoDb create one (ObjectId) for you.
    /* db.collection('Users').insertOne({
        name: 'Gemma',
        age: 36,
        location: 'Fauldhouse'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user', err);
        };
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    }); */

    client.close();
});