const { v4:uuid } = require('uuid');

module.exports = [
    {
        _id: uuid(),
        name: 'Test Name',
        message: 'Test Message'
    }
]