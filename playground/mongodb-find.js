//const MongoClient = require('mongodb').MongoClient;

//object destructuring ES6, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        //use return to prevent rest of function running if error.
        return console.log('Unable to connect to MongoDB server');
    };
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    //find without arguments is like select all.
    //or pass in key value pair like: {completed:false}
    //or the ObjectID
    //toArray is a promise
    /* db.collection('Todos').find({
        _id: new ObjectID("5b6d85431de048f452831605")
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    }); */

    //count records
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({
        name: 'Gemma'
    }).toArray().then((users) => {
        console.log('Users');
        console.log(JSON.stringify(users, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });



    //client.close();
});