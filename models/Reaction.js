const {Schema, model} = require('mongoose');
// TODO: add associated schemas here

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        thoughts: [],
        friends: [],
    }
)

const User = model('User', userSchema);

module.exports = User;