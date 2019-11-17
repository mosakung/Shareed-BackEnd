import express from 'express';
import Binding from '../binding';

const routerShareNote = express.Router();

const binding : Binding = new Binding();

routerShareNote.get('/', (req: any, res: any) => {
    //fetch All share note
})

routerShareNote.get('/:id/:userId', (req: any, res: any) => {
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