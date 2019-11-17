import express from 'express';

const routerReviewTutor = express.Router();

routerReviewTutor.get('/', (req: any, res: any) => {
    //fetch All share note
})

routerReviewTutor.get('/:id/:userId', (req: any, res: any) => {
    //fetch share note by id
})

routerReviewTutor.post('/', (req: any, res: any) => {
    //create share note
})

routerReviewTutor.put('/:id', (req: any, res: any) => {
    //update share note
})

routerReviewTutor.post('/:id', (req: any, res: any) => {
    //delete share note
})

export default routerReviewTutor;