const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

/* var newTodo = new Todo({
    text: 'Do something'
});

newTodo.save().then((doc) => {
    console.log('Saved to do', doc);
}, (err) => {
    console.log('Unable to save todo.', err);
}); */

module.exports = {Todo};