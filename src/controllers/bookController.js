const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const bookByAuthor= async function (req, res) {
    // let bookAuthor = req.body
    let bookAuthor = await bookModel.find().populate('author_id')
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
