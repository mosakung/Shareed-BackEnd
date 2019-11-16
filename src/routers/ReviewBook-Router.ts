import express from 'express';

const routerReviewBook = express('Router');

routerReviewBook.get('/', (req: any, res: any) => {
    //fetch All share note
})

routerReviewBook.get('/:id/:user-id', (req: any, res: any) => {
    //fetch share note by id
})

routerReviewBook.post('/', (req: any, res: any) => {
    //create share note
})

routerReviewBook.put('/:id', (req: any, res: any) => {
    //update share note
})

routerReviewBook.post('/:id', (req: any, res: any) => {
    //delete share note
})

export default routerReviewBook;