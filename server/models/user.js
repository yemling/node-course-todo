const mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

/* var newUser = new User({
    email: 'gvp@ceh.ac.uk'
});

newUser.save().then((doc) => {
    console.log('Saved user', doc);
}, (err) => {
    console.log('Unable to save user.', err);
}); */

module.exports = {User};