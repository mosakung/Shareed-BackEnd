import express from 'express';
import Binding from '../binding';

const routerReviewSubject = express.Router();

const binding : Binding = new Binding();

routerReviewSubject.get('/:page',  binding.getViewControllers().getReviewSubject)

routerReviewSubject.get('/:id/:userId',  binding.getViewControllers().getReviewSubjectID)

routerReviewSubject.post('/', (req: any, res: any) => {
    //create share note
})

routerReviewSubject.put('/:id', (req: any, res: any) => {
    //update share note
})

routerReviewSubject.post('/:id', binding.getDeleteControllers().deleteReviewSubject);

export default routerReviewSubject;