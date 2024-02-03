let arrJokes = []
const Joke = require("../models/joke.model")



// READ ALL
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            console.log(">>> All jokes  >>>", allJokes)
            res.json(allJokes)
        })
        .catch((err) => {
            res.json(err)
        })
}

// READ ONE 
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json(oneJoke)
        })
        .catch(err => {
            res.json(err)
        })
}


// CREATE 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((oneJoke) => {
            console.log(">>> Create one joke >>>", oneJoke)
            res.json(oneJoke)
        })
        .catch((err) => {
            res.json(err)
        })
}

// UPDATE
module.exports.updateAJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updateJoke => {
            res.json(updateJoke)
        })
        .catch(err => {
            res.json(err)
        })
}



// DELETE
module.exports.deleteAJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
}