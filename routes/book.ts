import {Router, Request, Response} from "express"
import { createBook, filterArrayController, getAllBooks, } from "../controllers/book.js";

const router = Router()

router.get("/", (req: Request ,res: Response) => {
    res.send("this is book route");
})
router.post("/", createBook )
router.get("/", getAllBooks)

router.get("/filter-arr", filterArrayController )



export default router;