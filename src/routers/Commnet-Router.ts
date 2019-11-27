import express from 'express';
import Binding from '../binding';

const routerComment = express.Router();

const binding : Binding = new Binding();

routerComment.post('/:postId', (req: any, res: any) => {
    //create share note
})

routerComment.put('/:commentId/:userId', binding.getEditControllers().editComment);

routerComment.delete('/:id/:userId', binding.getDeleteControllers().deleteComment);

export default routerComment;