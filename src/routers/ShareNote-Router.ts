import express from 'express';

const routerShareNote = express('Router');

routerShareNote.get('/', (req: any, res: any) => {
    //fetch All share note
})

routerShareNote.get('/:id/:user-id', (req: any, res: any) => {
    //fetch share note by id
})

routerShareNote.post('/', (req: any, res: any) => {
    //create share note
})

routerShareNote.put('/:id', (req: any, res: any) => {
    //update share note
})

routerShareNote.post('/:id', (req: any, res: any) => {
    //delete share note
})

export default routerShareNote;