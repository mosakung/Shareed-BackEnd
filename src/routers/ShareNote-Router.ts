import {express, Request, Response} from 'express';

const routerShareNote = express('Router');

routerShareNote.get('/', (req: Request, res: Response) => {
    //fetch All share note
})

routerShareNote.get('/:id/:userid', (req: Request, res: Response) => {
    //fetch share note by id
})

routerShareNote.post('/', (req: Request, res: Response) => {
    //create share note
})

routerShareNote.put('/:id', (req: Request, res: Response) => {
    //update share note
})

routerShareNote.post('/:id', (req: Request, res: Response) => {
    //delete share note
})

export default routerShareNote;