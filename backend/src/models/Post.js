const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostsImage = new Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('PostsImage', PostsImage);
