import express from 'express';

//Import router feature
import routerComment from './routers/Commnet-Router';
import routerFAQ from './routers/FAQ-Router';
import routerReviewBook from './routers/ReviewBook-Router';
import routerReviewSubject from './routers/ReviewSubject-Router';
import routerReviewTutor from './routers/ReviewTutor-Router';
import routerShareEvent from './routers/ShareEvent-Router';
import routerShareNote from './routers/ShareNote-Router';

const routing = express.Router();

routing.get('/Say', (req, res) => {
    res.send('Hi');
})

import database from '../server/database';
const db : database = new database;


routing.get('/test', (req, res) => {
    let first : string = 'ReviewBookID'
    let postId : string = 'a1000000001'
    db.query('select * from `reviewbook` where ? = ?',[first, postId]).then(function(result) {
        console.log("result",result);
    });
    res.status(100).send();
})

routing.use('/comment',routerComment);

routing.use('/faq',routerFAQ);

routing.use('/review-book',routerReviewBook);

routing.use('/review-subject',routerReviewSubject);

routing.use('/review-tutor',routerReviewTutor);

routing.use('/share-event',routerShareEvent);

routing.use('/share-note',routerShareNote);

export default routing;