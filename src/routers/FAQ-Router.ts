import express from 'express';
import Binding from '../binding';

const routerFAQ = express.Router();

const binding : Binding = new Binding();

routerFAQ.get('/', (req: any, res: any) => {
    //fetch All share note
})

routerFAQ.get('/:id/:userId', (req: any, res: any) => {
    //fetch share note by id
})

routerFAQ.post('/', (req: any, res: any) => {
    //create share note
})

routerFAQ.put('/:id', (req: any, res: any) => {
    //update share note
})

routerFAQ.post('/:id', binding.getDeleteControllers().deleteFaq);

export default routerFAQ;