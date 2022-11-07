const mongoose = require('mongoose');

const MonsterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true
    },
    appearance: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true  
    },
    yearCreated: {
        type: Number,
        required: true
    },
    link: {
        type: String
    }
}, {timestamps: true});

// Create a new MonsterSchema and export it 
const Monster = mongoose.model('Monster', MonsterSchema);
module.exports = Monster;