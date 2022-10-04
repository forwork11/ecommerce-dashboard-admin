const API = require('../constants/API');
const Product = require('../models/Product');

module.exports = {
    get: (req, res) => {
        Product.find()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
    },

    post: (req, res) => {
        const product = new Product({
            SKU: req.body.SKU,
            title: req.body.title,
            image: req.body.image
        });
        product.save()
        .then(result => res.status(201).send())
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
    },

    put: (req, res) => {
        const id = req.params.id;
        Product.findByIdAndUpdate(id, req.body, (err, doc) => {
            if (err) return res.status(500).send();
            res.status(204).send();
        })
    },

    delete: (req, res) => {
        const id = req.params.id;
        Product.findByIdAndDelete(id)
        .then(result => res.status(204).send())
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
    },
}