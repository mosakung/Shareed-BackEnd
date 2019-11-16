import {express, Request, Response} from 'express';

const routerReviewSubject = express('Router');

routerReviewSubject.get('/', (req: Request, res: Response) => {
    //fetch All share note
})

routerReviewSubject.get('/:id/:user-id', (req: Request, res: Response) => {
    //fetch share note by id
})

routerReviewSubject.post('/', (req: Request, res: Response) => {
    //create share note
})

routerReviewSubject.put('/:id', (req: Request, res: Response) => {
    //update share note
})

routerReviewSubject.post('/:id', (req: Request, res: Response) => {
    //delete share note
})

export default routerReviewSubject;