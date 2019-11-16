import express from 'express';

const routerReviewSubject = express('Router');

routerReviewSubject.get('/', (req: any, res: any) => {
    //fetch All share note
})

routerReviewSubject.get('/:id/:user-id', (req: any, res: any) => {
    //fetch share note by id
})

routerReviewSubject.post('/', (req: any, res: any) => {
    //create share note
})

routerReviewSubject.put('/:id', (req: any, res: any) => {
    //update share note
})

routerReviewSubject.post('/:id', (req: any, res: any) => {
    //delete share note
})

export default routerReviewSubject;