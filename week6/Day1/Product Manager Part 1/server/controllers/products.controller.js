
const Product = require("../models/product.model")

module.exports.findAllProducts= (req, res) => {
    Product.find()
        .then((allProducts) => {
            console.log(">>> all Products >>>", allProducts)
            res.json(allProducts)
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports.createProduct= (req, res) => {
    Product.create(req.body)
        .then((oneProduct) => {
            console.log(">>>Adding a product>>>", oneProduct)
            res.status(200).json(oneProduct)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
} 
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => {
            res.json(oneProduct)
        })
        .catch(err => {
            res.json(err)
        })
}
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
}