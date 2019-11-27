import express from 'express';
import Binding from '../binding';

const routerShareEvent = express.Router();

const binding : Binding = new Binding();

routerShareEvent.get('/:page',  binding.getViewControllers().getShareEvent)

routerShareEvent.get('/:postID/:userID',  binding.getViewControllers().getShareEventID)

routerShareEvent.post('/:userId', binding.getCreateControllers().createShareEvent)

routerShareEvent.put('/:postId/:userId', binding.getEditControllers().editShareEvent);

routerShareEvent.delete('/:id/:userId', binding.getDeleteControllers().deleteShareEvent);

export default routerShareEvent;