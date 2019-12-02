import express from 'express';
import Binding from '../binding';

const routerFAQ = express.Router();

const binding : Binding = new Binding();

routerFAQ.get('/:page', binding.getViewControllers().getFaq)

routerFAQ.get('/:postID/:userID',  binding.getViewControllers().getFaqID)

routerFAQ.post('/:userId', binding.getCreateControllers().createFaq)

routerFAQ.put('/:postId/:userId', binding.getEditControllers().editFaq);

routerFAQ.delete('/:id/:userId', binding.getDeleteControllers().deleteFaq);

export default routerFAQ;