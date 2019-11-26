import express from 'express';
import Binding from '../binding';

const routerComment = express.Router();

const binding : Binding = new Binding();

routerComment.get('/:postId/:userId', (req: any, res: any) => {
    //fetch share note by id
})

routerComment.post('/:postId', (req: any, res: any) => {
    //create share note
})

routerComment.put('/:postId/:userId', binding.getEditControllers().editComment);

routerComment.post('/:postId/:commentId', binding.getDeleteControllers().deleteComment);

export default routerComment;