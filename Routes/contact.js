const express = require('express')
const contact = require('../Models/contact.js')
const router = express.Router()

router.use(express.json())


// get contacts
router.get('/contacts',async (req,res)=>{
    try{
        let cont = await contact.find()
       
        res.status(200).json({
            status : "success",
            data : cont
        })
    }
    catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
})

//get specific contact
router.get('/contacts/:id',async (req,res)=>{
    try{
        let cont = await contact.find({_id : req.params.id})

        res.status(200).json({
            status : "success",
            data : cont
        })
    }
    catch(e){
        res.status(404).json({
            status : "failed",
            message : "There is no contact with that id"
        })
    }
})

//delete a specific item
router.delete('/contacts/:id',async (req,res)=>{
    try{
        let cont = await contact.deleteOne({_id : req.params.id})

        res.status(200).json({
            status : "success",
            data : cont
        })
    }
    catch(e){
        res.status(204).json({
            status : "failed",
        })
    }
})


//update a specific item
router.put('/contacts/:id',async (req,res)=>{
    try{
        let cont = await contact.updateOne({_id : req.params.id},req.body)

        res.status(200).json({
            status : "success",
            data : cont
        })
    }
    catch(e){
        res.status(404)
    }
})

//patch
router.patch('/contacts/:id',async (req,res)=>{
    try{
        let cont = await contact.updateOne({_id : req.params.id},req.body)

        res.status(200).json({
            status : "success",
            data : cont
        })
    }
    catch(e){
        res.status(404)
    }
})

//give error if field not inserted
router.post('/contacts',async (req,res)=>{
    try{
        let cont = await contact.create(req.body)
       
        res.status(200).json({
            status : "success",
            cont
        })
    }
    catch(e){
        res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
})

module.exports = router

