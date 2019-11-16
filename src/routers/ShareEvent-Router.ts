import {express, Request, Response} from 'express';

const routerShareEvent = express('Router');

routerShareEvent.get('/', (req: Request, res: Response) => {
    //fetch All share note
})

routerShareEvent.get('/:id/:user-id', (req: Request, res: Response) => {
    //fetch share note by id
})

routerShareEvent.post('/', (req: Request, res: Response) => {
    //create share note
})

routerShareEvent.put('/:id', (req: Request, res: Response) => {
    //update share note
})

routerShareEvent.post('/:id', (req: Request, res: Response) => {
    //delete share note
})

export default routerShareEvent;