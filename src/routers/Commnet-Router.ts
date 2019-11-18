import express from 'express';

const routerComment = express.Router();

routerComment.get('/:postId/:userId', (req: any, res: any) => {
    //fetch share note by id
})

routerComment.post('/:postId', (req: any, res: any) => {
    //create share note
})

routerComment.put('/:postId/:commentId', (req: any, res: any) => {
    //update share note
})

routerComment.post('/:postId/:commentId', (req: any, res: any) => {
    //delete share note
})

export default routerComment;