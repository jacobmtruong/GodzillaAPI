const mongoose = require('mongoose');

const MonsterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    imgUrl: {
        type: String,
        required: [true, "img is required"]
    },
    firstAppear: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    level: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    yearCreated: {
        type: Number,
        required: [true, "{PATH} is required"]
    },
    link: {
        type: String,
        required: [true, "{PATH} is required"]
    }
}, {timestamps: true});

// Create a new MonsterSchema and export it 
const Monster = mongoose.model('Monster', MonsterSchema);
module.exports = Monster;