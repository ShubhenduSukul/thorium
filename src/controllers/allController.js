const authorModel =require('../models/authorModel')
const bookModel = require('../models/bookModel')

const createNewAuthor = async function(req,res){
    const reqAuthor = req.body;
    const saveData =await authorModel.create(reqAuthor)
    res.send({msg:saveData})
}

const createNewBook = async function(req,res){
const reqBook =req.body;
const saved = await bookModel.create(reqBook)
res.send({msg:saved})
}

const allBooks = async function(req,res){
    let authorDetails= await authorModel.find({author_name:"Chetan Bhagat"})
    const id =authorDetails[0].authorid
    const booksName =await bookModel.find({author_id:id}).select({name:1})
    res.send({msg:booksName})
}
const updatedBookPrice = async function(req,res){
    const bookDetails= await bookModel.find({name:"Tempest"})
    const id = bookDetails[0].author_id
    const authorN = await authorModel.find({author_id:id}).select({author_name:1,_id:0})

    const bkName = bookDetails[0].name
    const updatedPrice= await bookModel.findOneAndUpdate({name:bkName},{price:100},{new:true}).select({price:1,_id:0})
    res.send({msg:suthor, updatedPrice})
}

const authorNam= async function(req,res){
    const booksId=await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const id = booksId.map(inp=>Inp.author_id)
}

let temp =[]
    for(let i=0; i<id.length; i++) {
        let x = id[i]
        const author = authorModel.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }

   const authorName = temp.flat()

  res.send({msg:authorName})


module.exports.createNewAuthor = createNewAuthor
module.exports.createNewBook = createNewBook
module.exports.allBooks = allBooks
module.exports.upadatedBookPrice = upadatedBookPrice
module.exports.authorsName = authorsName