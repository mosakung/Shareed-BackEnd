import express from 'express';
import Binding from '../binding';

const routerShareEvent = express.Router();

const binding : Binding = new Binding();

routerShareEvent.get('/:page',  binding.getViewControllers().getShareEvent)

routerShareEvent.get('/:id/:userId',  binding.getViewControllers().getShareEventID)

routerShareEvent.post('/', (req: any, res: any) => {
    //create share note
})

routerShareEvent.put('/:id', (req: any, res: any) => {
    //update share note
})

routerShareEvent.post('/:id', binding.getDeleteControllers().deleteShareEvent);

export default routerShareEvent;