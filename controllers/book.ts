import { Request, Response } from "express"

const filterArrayController = (req: Request ,res: Response) => {
    const arr = [1,2,3,4,5,6,7,8,9]
    const filteredArray = arr.filter ((item) => item % 2===0)

    res.status(200).json({
        message: "successful",
        success: true,
        data :filteredArray,
    })
}

const books = [
    {
        id: 1,
        author: "Diaa abu zenh",
        bookName: "Data Structure"
    },
    {
        id: 2,
        author: "Nabeel 3rman",
        bookName: "Database"
    },
]


const getAllBooks = (req: Request ,res:Response ) => {
    res.json({
        message: "getting all books successfully",
        status: true,
        books: books
    })
}

const createBook = (req: Request ,res:Response ) => {
    const newBook = {
        id: 3,
        author: "Nabeel 3rman",
        bookName: "Database 2"
    }

    books.push(newBook)

    res.status(201).json({
        message: "created successfully",
        books: books 
    })
}
export {filterArrayController,getAllBooks,createBook}