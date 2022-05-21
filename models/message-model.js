const mongoose = require('mongoose');

const {Schema} = mongoose;

const messageSchema = new Message({
    name: {
        type: String,
        required: [true, 'A name is required.'],
        minlength: [1, 'Minimum length for the name is 1 character.']
    },
    message: {
        type: String,
        required: [true, 'A message is rqeuired.'],
        minlength: [1, 'Minimum length for the message is 1 character.']
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;