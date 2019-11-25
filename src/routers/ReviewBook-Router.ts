import express from 'express';
import Binding from '../binding';

const routerReviewBook = express.Router();

const binding : Binding = new Binding();

routerReviewBook.get('/:page', binding.getViewControllers().getReviewBook);

routerReviewBook.get('/:id/:userId', binding.getViewControllers().getReviewBookID);

routerReviewBook.post('/',);

routerReviewBook.put('/:postId/:userId', binding.getEditControllers().editReviewBook);

routerReviewBook.delete('/:id/:userId', binding.getDeleteControllers().deleteReviewBook);

export default routerReviewBook;