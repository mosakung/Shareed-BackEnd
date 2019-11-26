import express from 'express';
import Binding from '../binding';

const routerShareNote = express.Router();

const binding : Binding = new Binding();

routerShareNote.get('/:page',  binding.getViewControllers().getShareNote)

routerShareNote.get('/:postID/:userID',  binding.getViewControllers().getShareNoteID)

routerShareNote.post('/:userId', binding.getCreateControllers().createShareNote)

routerShareNote.put('/:postId/:userId', binding.getEditControllers().editShareNote);

routerShareNote.delete('/:id/:userId', binding.getDeleteControllers().deleteShareNote);

export default routerShareNote;