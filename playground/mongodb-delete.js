//const MongoClient = require('mongodb').MongoClient;

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

    //deleteMany
    /* db.collection('Todos').deleteMany({
        text: 'Eat lunch'
    }).then((result) => {
        console.log(result);
    }); */

    //deleteOne
    /* db.collection('Todos').deleteOne({
        text: 'Eat lunch'
    }).then((result) => {
        console.log(result);
    }); */


    //findOneAndDelete
    /* db.collection('Todos').findOneAndDelete({
        completed: false
    }).then((result) => {
        console.log(result);
    }); */

    /* db.collection('Users').deleteMany({
        name: 'Gemma'
    }).then((result) => {
        console.log(result);
    });*/
    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b6d82127280cf1d84259471')
    }).then((result) => {
        console.log(result);
    }); 

    //client.close();
});