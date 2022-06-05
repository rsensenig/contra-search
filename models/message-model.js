const mongoose = require('mongoose');

const {Schema} = mongoose;

const messageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required.'],
        minlength: [1, 'Minimum length for the name is 1 character.']
    },
    email: {
        type: String,
        required: [true, 'An email is required.'],
        minlength: [3, 'Minimum length for email is 3 characters.']
    },
    message: {
        type: String,
        required: [true, 'A message is required.'],
        minlength: [1, 'Minimum length for the message is 1 character.']
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;