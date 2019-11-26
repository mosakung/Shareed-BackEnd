import express from 'express';
import Binding from '../binding';

const routerReviewTutor = express.Router();

const binding : Binding = new Binding();

routerReviewTutor.get('/:page', binding.getViewControllers().getReviewTutor)

routerReviewTutor.get('/:postID/:userID',  binding.getViewControllers().getReviewTutorID)

routerReviewTutor.post('/', (req: any, res: any) => {
    //create share note
})

routerReviewTutor.put('/:postId/:userId', binding.getEditControllers().editReviewTutor);

routerReviewTutor.delete('/:id/:userId', binding.getDeleteControllers().deleteReviewTutor);

export default routerReviewTutor;