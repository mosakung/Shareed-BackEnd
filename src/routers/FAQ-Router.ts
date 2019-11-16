import express from 'express';

const routerFAQ = express('Router');

routerFAQ.get('/', (req: any, res: any) => {
    //fetch All share note
})

routerFAQ.get('/:id/:user-id', (req: any, res: any) => {
    //fetch share note by id
})

routerFAQ.post('/', (req: any, res: any) => {
    //create share note
})

routerFAQ.put('/:id', (req: any, res: any) => {
    //update share note
})

routerFAQ.post('/:id', (req: any, res: any) => {
    //delete share note
})

export default routerFAQ;