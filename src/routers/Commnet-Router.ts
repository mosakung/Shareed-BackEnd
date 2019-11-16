import {express, Request, Response} from 'express';

const routerComment = express('Router');

routerComment.get('/:post-id/:user-id', (req: Request, res: Response) => {
    //fetch share note by id
})

routerComment.post('/:post-id', (req: Request, res: Response) => {
    //create share note
})

routerComment.put('/:postid/:comment-id', (req: Request, res: Response) => {
    //update share note
})

routerComment.post('/:postid/:comment-id', (req: Request, res: Response) => {
    //delete share note
})

export default routerComment;