//const MongoClient = require('mongodb').MongoClient;
//https://docs.mongodb.com/manual/reference/operator/update/
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

    /* db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID("5b6d8e971de048f452831996")
        }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    }); */
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b6d796d309e982788c6af81")
    }, {
        $set: {
            name: 'Gemma'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }
).then((result) => {
    console.log(result);
})

    //client.close();
});