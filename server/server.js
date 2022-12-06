const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;


// Bring in cors 
// Cors allow us to let us access the server, we can limit port with cors
const cors = require('cors');

// Middleware
app.use(cors(),express.json(), express.urlencoded({extended: true}));

require('./config/mongoose.config')
require('./routes/monster.routes') (app)


app.get('/api', (req, res) => res.json("Hello, world!"));


// Start server 
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

