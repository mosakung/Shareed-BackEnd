import express from 'express';
import Binding from '../binding';

const routerShareEvent = express.Router();

const binding : Binding = new Binding();

routerShareEvent.get('/', (req: any, res: any) => {
    //fetch All share note
})

routerShareEvent.get('/:id/:userId', (req: any, res: any) => {
    //fetch share note by id
})

routerShareEvent.post('/', (req: any, res: any) => {
    //create share note
})

routerShareEvent.put('/:postId/:userId', binding.getEditControllers().editShareEvent);

routerShareEvent.post('/:id', binding.getDeleteControllers().deleteShareEvent);

export default routerShareEvent;