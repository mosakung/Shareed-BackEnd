import express from 'express';

const routerShareEvent = express('Router');

routerShareEvent.get('/', (req: any, res: any) => {
    //fetch All share note
})

routerShareEvent.get('/:id/:userId', (req: any, res: any) => {
    //fetch share note by id
})

routerShareEvent.post('/', (req: any, res: any) => {
    //create share note
})

routerShareEvent.put('/:id', (req: any, res: any) => {
    //update share note
})

routerShareEvent.post('/:id', (req: any, res: any) => {
    //delete share note
})

export default routerShareEvent;