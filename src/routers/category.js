const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.get('/', async(req, res)=> {
    try{
        const categories = await Category.getAll();
        res.json(categories);
    }catch(err){
     res.json({message:'get çalışmıyor'});
    }
});

router.get('/:id', async(req, res)=> {
    try{
        const category = await Category.getById(req.params.id)
        if(!category){
            return res.status(404).json({message:"Kayıt yok"});
        }
        res.json(category);
    }catch(err){
        res.status(400).json({message: 'get id çalışmıyor'})
    }
});

router.post('/', async(req, res)=> {
    try{
        const newCategory = await Category.create(req.body);
        res.status(201).json(newCategory);
    }catch(err){
        res.status(400).json({message: 'post çalışmıyor.'});
    }
}); 

router.patch('/:id', async(req, res)=> {
    try{
        const upCategory = await Category.update(req.params.id, req.body);
        res.json(upCategory)
    }catch(err){
        res.status(400).json({message: 'update çalışmıyor'});
    }
});

router.delete('/:id', async(req, res)=> {
    try{
        const deleteCategory = await Category.delete(req.params.id);
        res.json(deleteCategory);
    }catch(err){
        res.status(400).json({message: 'get id çalışmıyor'})
    }
});
module.exports = router;