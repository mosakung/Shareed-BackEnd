import express from 'express';
import Binding from '../binding';

const routerFAQ = express.Router();

const binding : Binding = new Binding();

routerFAQ.get('/:page', binding.getViewControllers().getFaq)

routerFAQ.get('/:id/:userId',  binding.getViewControllers().getFaqID)

routerFAQ.post('/', (req: any, res: any) => {
    //create share note
})

routerFAQ.put('/:id', (req: any, res: any) => {
    //update share note
})

routerFAQ.post('/:id', binding.getDeleteControllers().deleteFaq);

export default routerFAQ;