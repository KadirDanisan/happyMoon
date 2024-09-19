const knex = require('./knex');

const Products = {
    getAll: () => {
      return knex('products').whereNull('deleted_at');
    },
    getById: (id)=> {
        return knex('products').where({id}).first();
    },
    create: (product)=> {
        return knex('products').insert(product).returning('*');
    },
    update: (id, product)=> {
        return knex('products').where({id}).update(product).returning('*');
    },
    delete: (id)=> {
        return knex('products').where({id}).update({deleted_at:new Date()}).returning('*');
    }
}

module.exports = Products;