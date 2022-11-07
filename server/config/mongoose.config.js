const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/godzillaAPI", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to godzillaAPI'))
    .catch(err => { console.log("There was an error connecting to godzillaAPI", err) })