import express from 'express';
import Binding from '../binding';

const routerReviewSubject = express.Router();

const binding : Binding = new Binding();

routerReviewSubject.get('/:page',  binding.getViewControllers().getReviewSubject)

routerReviewSubject.get('/:postID/:userID',  binding.getViewControllers().getReviewSubjectID)

routerReviewSubject.post('/:userId', binding.getCreateControllers().createReviewSubject)

routerReviewSubject.put('/:postId/:userId', binding.getEditControllers().editReviewSubject);

routerReviewSubject.delete('/:id/:userId', binding.getDeleteControllers().deleteReviewSubject);

export default routerReviewSubject;