import express from 'express';
import Binding from '../binding';

const routerReviewBook = express.Router();

const binding : Binding = new Binding();

routerReviewBook.get('/', binding.getViewControllers().getReviewBook);

routerReviewBook.get('/:id/:userId', binding.getViewControllers().getReviewBookID);

routerReviewBook.post('/', (req: any, res: any) => {
    //create share note
})

routerReviewBook.put('/:id', (req: any, res: any) => {
    //update share note
})

<<<<<<< HEAD
routerReviewBook.delete('/:id/:userId', binding.getDeleteControllers().deleteReviewBook);
=======
routerReviewBook.post('/:id/:userId', (req: any, res: any) => {
    //delete share note
})
>>>>>>> router

export default routerReviewBook;