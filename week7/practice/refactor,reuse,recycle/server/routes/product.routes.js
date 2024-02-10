const ProductController = require("../controllers/products.controller")


module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts)
    app.get("/api/products/:id", ProductController.findOneProduct)
    app.patch("/api/products/:id", ProductController.editProduct)
    app.post("/api/products", ProductController.createProduct)
    app.delete("/api/products/:id", ProductController.deleteAnExistingProduct)
}