/* There are only four lines of code that are next.js related and everything else is the usual express code:
1. Require next.
2. Initiate it by letting it know which environment we're using (I chose to call that nextApp and call the express instance app 
- because I can come back next few months and read the express code with no problem.)
3. Next requires getRequestHandler()
4. Then we run prepare on the nextApp and then we run express. */ 
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() //part of next config
const mongoose = require('mongoose')

/*The database we are using has to contain the data of course. You can import the data I've left in the repository by running the following command:

mongoimport --jsonArray --db Photos --collection photos --file '/your-project-folder/data/db.json'
That imports the data into Photos database, and inside a collection named photos.

The project now should be run by using express as the starting point.*/
const db = mongoose.connect('mongodb://localhost:27017/Photos')


nextApp.prepare().then(() => {
    // express code here
    const app = express()
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api/photos', require('./routes/index')) 
    /* app.get('*', ...) is important because it means that all routers that aren't specified already, let next.js deal with them*/
    app.get('*', (req,res) => {
        return handle(req,res) // for all the react stuff
    })
    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })
})