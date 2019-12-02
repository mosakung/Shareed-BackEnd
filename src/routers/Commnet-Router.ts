import express from 'express';
import Binding from '../binding';

const routerComment = express.Router();

const binding : Binding = new Binding();

routerComment.post('/:postID/:userId', binding.getCreateControllers().createComment)

routerComment.put('/:commentId/:userId', binding.getEditControllers().editComment);

routerComment.delete('/:id/:userId', binding.getDeleteControllers().deleteComment);

export default routerComment;