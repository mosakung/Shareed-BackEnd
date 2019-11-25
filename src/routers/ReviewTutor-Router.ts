import express from 'express';
import Binding from '../binding';

const routerReviewTutor = express.Router();

const binding : Binding = new Binding();

routerReviewTutor.get('/', (req: any, res: any) => {
    //fetch All share note
})

routerReviewTutor.get('/:id/:userId', (req: any, res: any) => {
    //fetch share note by id
})

routerReviewTutor.post('/', (req: any, res: any) => {
    //create share note
})

routerReviewTutor.put('/:postId/:userId', binding.getEditControllers().editReviewTutor);

routerReviewTutor.post('/:id', binding.getDeleteControllers().deleteReviewTutor);

export default routerReviewTutor;