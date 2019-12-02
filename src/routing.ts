import express from 'express';

//Import router feature
import routerComment from './routers/Commnet-Router';
import routerFAQ from './routers/FAQ-Router';
import routerReviewBook from './routers/ReviewBook-Router';
import routerReviewSubject from './routers/ReviewSubject-Router';
import routerReviewTutor from './routers/ReviewTutor-Router';
import routerShareEvent from './routers/ShareEvent-Router';
import routerShareNote from './routers/ShareNote-Router';
import routerHomepage from './routers/Homepage-Router';

const routing = express.Router();

routing.get('/Say', (req, res) => {
    res.send('Hi');
})

routing.use('/comment',routerComment);

routing.use('/faq',routerFAQ);

routing.use('/review-book',routerReviewBook);

routing.use('/review-subject',routerReviewSubject);

routing.use('/review-tutor',routerReviewTutor);

routing.use('/share-event',routerShareEvent);

routing.use('/share-note',routerShareNote);

routing.use('/homepage-user',routerHomepage);

export default routing;