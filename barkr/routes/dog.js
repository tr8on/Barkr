const express = require('express')

const  dogRouter = express.Router()
const {Dog} = require('../Models/models');
// dog routes here

 dogRouter.get('/', async (req, res) => {
    const  dogs = await  Dog.findAll()
    res.json({
         dogs: dogs
    })
 
});

// GET one dog
 dogRouter.get('/:id', async (req, res) => {
    const dog = await  Dog.findByPk(req.params.id)
    res.json({
         dog
    })
});

// POST one dog
 dogRouter.post('/', async (req, res) => {
    const  newdog = await  Dog.create(req.body)
    res.json({
         newdog: newdog
    })
})

// PUT(edit) one dog

 dogRouter.put('/:id', async (req, res) => {
      const result = await Dog.update(req.body,{
        where:{
          id:req.params.id
        }
      })
   res.json({message:"The dog has been edited"})
})

// DELETE one dog

 dogRouter.delete('/:id', async (req, res) => {
    // DELETE the dog with the id in the query params
    // await  Dog.destroy({
    //     where: {
    //         id: req.params.id
    //     }
    // })

    // alternative method:
    const   dog = await  Dog.findByPk(req.params.id)
     dog.destroy()

    res.json({
        message: "Dog Deleted!"
    })
});



module.exports  = {
     dogRouter
}
