const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")



const createBook = async function (req, res) {
    let book = req.body;
    let authorId = req.body.author;
    let publisherId = req.body.publisher;

const bookByAuthor= async function (req, res) {
    let bookAuthor = req.body
    let AuthorId = await bookModel.find().populate('author_id')
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

const newData = async function (req, res) {
    {
        const update = await bookModel.updateMany({$or: [{"publisher":"62207b420c7a6b716bf251d3" },{"publisher": "62207b5f0c7a6b716bf251d7"}]},{"isHardCover" : true});
         res.send({msg:update})
       }

}

const increaseSale= async function (req, res) {
    let increasePrice = await bookModel.updateMany({ratings:{$gt:3.5}},{$inc : {price: +10}});

    res.send({msg: increasePrice })
   
}



    const getBooks = async function (req, res) {
    let books = await bookModel.find().populate("author publisher");
    res.send({ data: books });
  }





const updateBooks = async function (req, res) {
    
    let hardCoverPublishers = await publisherModel.find({
      name: { $in: ["Penguin", "HarperCollins"] },
    });
    let publisherIds = hardCoverPublishers.map((p) => p._id); 
  
    await bookModel.updateMany(
      { publisher: { $in: publisherIds } },
      { isHardCover: true }
    );
  
    let highRatedAuthors = await authorModel.find({ rating: { $gt: 3.5 } });
    let authorIds = highRatedAuthors.map((a) => a._id);
  
    await bookModel.updateMany(
      { author: { $in: authorIds } },
      { $inc: { price: 10 } }
    );
  
    let updatedBooks = await bookModel.find();
    res.send({ updatedBookCollection: updatedBooks });
  };
  
  module.exports.createBook = createBook;
  module.exports.getBooks = getBooks;
  module.exports.updateBooks = updateBooks;
    module.exports.bookByAuthor= bookByAuthor;
    module.exports.getBooksData= getBooksData;
    module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
}
