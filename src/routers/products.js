const express = require('express');
const router = express.Router();
const Products = require('../models/products');

router.get('/', async(req, res)=> {
    try{
        const products = await Products.getAll();
        res.json(products);
    }catch(err){
     res.json({message:'get çalışmıyor'});
    }
});

router.get('/:id', async(req, res)=> {
    try{
        const product = await Products.getById(req.params.id)
        if(!product){
            return res.status(404).json({message:"Kayıt yok"});
        }
        res.json(product);
    }catch(err){
        res.status(400).json({message: 'get id çalışmıyor'})
    }
});

router.post('/', async(req, res)=> {
    try{
        const newProducts = await Products.create(req.body);
        res.status(201).json(newProducts);
    }catch(err){
        res.status(400).json({message: 'post çalışmıyor.'});
    }
}); 

router.patch('/:id', async(req, res)=> {
    try{
        const upProducts = await Products.update(req.params.id, req.body);
        res.json(upProducts)
    }catch(err){
        res.status(400).json({message: 'update çalışmıyor'});
    }
});

router.delete('/:id', async(req, res)=> {
    try{
        const deleteProducts = await Products.delete(req.params.id);
        res.json(deleteProducts);
    }catch(err){
        res.status(400).json({message: 'get id çalışmıyor'})
    }
});
module.exports = router;