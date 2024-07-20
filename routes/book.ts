import {Router, Request, Response} from "express"
import { createBook, deleteBook, filterArrayController, getAllBooks, getSingleBook, } from "../controllers/book.js";

const router = Router()

router.post("/", createBook )
router.get("/", getAllBooks)
router.get("/filter-arr", filterArrayController )
router.delete("/:id", deleteBook)
router.get("/:id", getSingleBook)



export default router;