/*Above we basically created the API points that we know our react code requires. 
When /api/photos is requested, we return all photos found in the database. 
If any type of request is made on /api/photos/:id then we have to find the relevant object in the database. 
Then depending on whether the request is a get or a put we either respond with the object or edit the object depending on the required data we've received. */
const express = require('express')
const router = express.Router()
const Photos = require('../models/photoModel')

router.get('/', (req, res) => {
    Photos.find({}, (err, photos) => {
        res.json(photos)
    })
})
router.use('/:id', (req, res, next) => {
    Photos.findById(req.params.id, (err, photo) => {
        if(err)
            res.status(500).send(err)
        else 
            req.photo = photo 
            next()
    })
})
router
    .get('/:id', (req, res) => {
        return res.json( req.photo )
    })
    .put('/:id', (req, res) =>{
        
        Object.keys(req.body).map(key=>{
            req.photo[key] = req.body[key]
        })
        req.photo.save()
        res.json(req.photo)
    })
module.exports = router;