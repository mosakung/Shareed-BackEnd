import express from 'express';
import Binding from '../binding';

const routerReviewSubject = express.Router();

const binding : Binding = new Binding();

routerReviewSubject.get('/', (req: any, res: any) => {
    //fetch All share note
})

routerReviewSubject.get('/:id/:userId', (req: any, res: any) => {
    //fetch share note by id
})

routerReviewSubject.post('/', (req: any, res: any) => {
    //create share note
})

routerReviewSubject.put('/:id', (req: any, res: any) => {
    //update share note
})

routerReviewSubject.post('/:id', binding.getDeleteControllers().deleteReviewSubject);

export default routerReviewSubject;