const express = require('express');
const router = express.Router();
const Ingredients = require('../models/ingredients');

router.get('/', async(req, res)=> {
    try{
        const ingredients = await Ingredients.getAll();
        res.json(ingredients);
    }catch(err){
     res.json({message:'get çalışmıyor'});
    }
});

router.get('/:id', async(req, res)=> {
    try{
        const ingredient = await Ingredients.getById(req.params.id)
        if(!ingredient){
            return res.status(404).json({message:"Kayıt yok"});
        }
        res.json(ingredient);
    }catch(err){
        res.status(400).json({message: 'get id çalışmıyor'})
    }
});

router.post('/', async(req, res)=> {
    try{
        const newIngredient = await Ingredients.create(req.body);
        res.status(201).json(newIngredient);
    }catch(err){
        res.status(400).json({message: 'post çalışmıyor.'});
    }
}); 

router.patch('/:id', async(req, res)=> {
    try{
        const upIngredient = await Ingredients.update(req.params.id, req.body);
        res.json(upIngredient)
    }catch(err){
        res.status(400).json({message: 'update çalışmıyor'});
    }
});

router.delete('/:id', async(req, res)=> {
    try{
        const deleteIngredient = await Ingredients.delete(req.params.id);
        res.json(deleteIngredient);
    }catch(err){
        res.status(400).json({message: 'get id çalışmıyor'})
    }
});
module.exports = router;