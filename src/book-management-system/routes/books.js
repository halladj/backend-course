import {Book }from"../models/book.js";


const GetAllBook = async(req,res) =>{
    const book = await Book.find({});                  
    res.status(200);
    res.send(book);
}


const GetBookById = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book === null){
        res.sendStatus(404);
    }
    res.status(404);
    res.send(book);
}   

const CreateNewBook = async(req, res)=> {
    
    const book = Book({
          title: req.body.title, 
          description: req.body.description,
          price:  req.body.price,
          stockQuantity:  req.body.stockQuantity,
          category:  req.body.category,
    })
    await book.save();

    res.status(201);
    res.send(book);
}


const UpdateBookById = async (req, res)=> {
    const id = req.params.id;
    await Book.updateOne({"_id": id}, {"title": req.body.title});
    res.status(204);
    res.send("Updated Succesfuly")
}

const DeleteBookByID = async(req, res) => {
    const id = req.params.id;
    await Book.deleteOne({"_id": id});
    res.status(204);
    res.send("Deleted Succesfuly")
}

export {GetAllBook,GetBookById, CreateNewBook, UpdateBookById, DeleteBookByID}
