import express from 'express';
import Binding from '../binding';

const routerFAQ = express.Router();

const binding : Binding = new Binding();

routerFAQ.get('/:page', binding.getViewControllers().getFaq)

routerFAQ.get('/:postID/:userID',  binding.getViewControllers().getFaqID)

routerFAQ.post('/', (req: any, res: any) => {
    //create share note
})

routerFAQ.put('/:postId/:userId', binding.getEditControllers().editFaq);

routerFAQ.delete('/:id/:userId', binding.getDeleteControllers().deleteFaq);

export default routerFAQ;