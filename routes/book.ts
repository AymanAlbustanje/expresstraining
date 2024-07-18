import {Router, Request, Response} from "express"
import { createBook, deleteBook, filterArrayController, getAllBooks, } from "../controllers/book.js";

const router = Router()

router.post("/", createBook )
router.get("/", getAllBooks)
router.get("/filter-arr", filterArrayController )
router.delete("/:id", deleteBook)



export default router;