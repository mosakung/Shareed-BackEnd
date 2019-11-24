import express from 'express';
import Binding from '../binding';

const routerReviewTutor = express.Router();

const binding : Binding = new Binding();

routerReviewTutor.get('/:page', binding.getViewControllers().getReviewTutor)

routerReviewTutor.get('/:id/:userId',  binding.getViewControllers().getReviewTutorID)

routerReviewTutor.post('/', (req: any, res: any) => {
    //create share note
})

routerReviewTutor.put('/:id', (req: any, res: any) => {
    //update share note
})

routerReviewTutor.post('/:id', binding.getDeleteControllers().deleteReviewTutor);

export default routerReviewTutor;