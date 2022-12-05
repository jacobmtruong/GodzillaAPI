const express = require('express');
const app = express();
const port = 8000;


// Bring in cors 
// Cors allow us to let us access the server, we can limit port with cors
const cors = require('cors');

// Middleware
app.use(cors(),express.json(), express.urlencoded({extended: true}));

require('./config/mongoose.config')
require('./routes/monster.routes') (app)


app.get('/api', (req, res) => res.json("Hello, world!"));


// Start server 
app.listen(port, () => console.log(`Listening on port ${port}`));

// server static assets if in production
if(process.env.NODE_ENV === 'production'){    
    app.use(express.static('frontend/build'))  // set static folder 
    //returning frontend for any route other than api 
    app.get('*',(req,res)=>{     
        res.sendFile (path.resolve(__dirname,'frontend','build',         
                      'index.html' ));    
    });
}
