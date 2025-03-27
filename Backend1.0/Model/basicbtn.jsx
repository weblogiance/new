const mongoose = require('mongoose');

const magicbuttonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    bgcolor: {
        type: String,
        required: true
    },
    size: {
        type: String,
    },
    btncode:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('MagicButton', magicbuttonSchema);