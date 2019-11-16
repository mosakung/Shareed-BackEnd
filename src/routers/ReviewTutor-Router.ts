import {express, Request, Response} from 'express';

const routerReviewTutor = express('Router');

routerReviewTutor.get('/', (req: Request, res: Response) => {
    //fetch All share note
})

routerReviewTutor.get('/:id/:user-id', (req: Request, res: Response) => {
    //fetch share note by id
})

routerReviewTutor.post('/', (req: Request, res: Response) => {
    //create share note
})

routerReviewTutor.put('/:id', (req: Request, res: Response) => {
    //update share note
})

routerReviewTutor.post('/:id', (req: Request, res: Response) => {
    //delete share note
})

export default routerReviewTutor;