import express from 'express';
import Binding from '../binding';

const routerShareNote = express.Router();

const binding : Binding = new Binding();

routerShareNote.get('/:page',  binding.getViewControllers().getShareNote)

routerShareNote.get('/:postID/:userID',  binding.getViewControllers().getShareNoteID)

routerShareNote.post('/', (req: any, res: any) => {
    //create share note
})

routerShareNote.put('/:id', (req: any, res: any) => {
    //update share note
})

routerShareNote.post('/:id', binding.getDeleteControllers().deleteShareNote);

export default routerShareNote;