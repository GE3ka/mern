
const Author = require("../models/author.model")



// READ ALL
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            console.log(">>> Movie.find()  >>>", allAuthors)
            res.json(allAuthors)
        })
        .catch((err) => {
            res.json(err)
        })
}

// READ ONE 
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => {
            res.json(oneAuthor)
        })
        .catch(err => {
            res.json(err)
        })
}


// CREATE 
module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then((oneAuthor) => {
            console.log(">>> Adding a new author to DB >>>", oneAuthor)
            res.status(200).json(oneAuthor)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

// UPDATE
module.exports.updateExistentAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updateAuthor => {
            res.status(200).json(updateAuthor)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}



// DELETE
module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
}