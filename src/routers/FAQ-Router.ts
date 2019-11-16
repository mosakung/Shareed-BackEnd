import {express, Request, Response} from 'express';

const routerFAQ = express('Router');

routerFAQ.get('/', (req: Request, res: Response) => {
    //fetch All share note
})

routerFAQ.get('/:id/:user-id', (req: Request, res: Response) => {
    //fetch share note by id
})

routerFAQ.post('/', (req: Request, res: Response) => {
    //create share note
})

routerFAQ.put('/:id', (req: Request, res: Response) => {
    //update share note
})

routerFAQ.post('/:id', (req: Request, res: Response) => {
    //delete share note
})

export default routerFAQ;