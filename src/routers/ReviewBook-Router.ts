import {express, Request, Response} from 'express';

const routerReviewBook = express('Router');

routerReviewBook.get('/', (req: Request, res: Response) => {
    //fetch All share note
})

routerReviewBook.get('/:id/:user-id', (req: Request, res: Response) => {
    //fetch share note by id
})

routerReviewBook.post('/', (req: Request, res: Response) => {
    //create share note
})

routerReviewBook.put('/:id', (req: Request, res: Response) => {
    //update share note
})

routerReviewBook.post('/:id', (req: Request, res: Response) => {
    //delete share note
})

export default routerReviewBook;