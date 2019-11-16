import express from 'express';

const routerComment = express('Router');

routerComment.get('/:post-id/:user-id', (req: any, res: any) => {
    //fetch share note by id
})

routerComment.post('/:post-id', (req: any, res: any) => {
    //create share note
})

routerComment.put('/:postid/:comment-id', (req: any, res: any) => {
    //update share note
})

routerComment.post('/:postid/:comment-id', (req: any, res: any) => {
    //delete share note
})

export default routerComment;