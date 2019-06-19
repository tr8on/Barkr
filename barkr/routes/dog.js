const express = require('express')


const  dogRouter = express.Router()
const {Dog} = require('../Models/models');
const {Owner} = require('../Models/models');
// dog routes here

 dogRouter.get('/', async (req, res) => {
    const  dogs = await  Dog.findAll()
    res.json({
         dogs: dogs
    })
 
});
dogRouter.get('/owners', async (req, res) => {
     const owner = await Owner.findAll()
     res.json({
          owner: owner
     })
  
 });

 dogRouter.get('/:gender', async (req, res, next) => {
      if(req.params.gender === "Male" || req.params.gender === "Female"){
     const  dogs = await  Dog.findAll({
          where:{
        gender:req.params.gender
      }
      
    })
    console.log(req.params.gender)
     res.json({
          dogs: dogs
     })}
     else{
          next()
     }
});

 dogRouter.get('/:id', async (req, res) => {
     const dog = await  Dog.findByPk(req.params.id)
     console.log(req.params.id)
     res.json({
          dog: dog
     })
 });
 

// GET one dog

dogRouter.get('/owner/:id', async (req, res) => {
     const owner = await  Owner.findByPk(req.params.id)
     res.json({
          owner
     })
 });
 

// POST one dog
 dogRouter.post('/owner/:id', async (req, res) => {
    const  newdog = await  Dog.create(req.body)
//     console.log('dog:', newdog)
    const owner = await Owner.findByPk(req.params.id)
    console.log('owner', owner)
    const updateDog = await newdog.setOwner(owner)
//     console.log(updateDog)
    res.json({
         newdog: updateDog
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
