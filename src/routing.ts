import express from 'express';

//Import router feature
import routerShareNote from './routers/ShareNote-Router';

const routing = express('Router');

routing.get('/Say', (req, res) => {
    res.send('Hi');
})

routing.use('/share-note',routerShareNote);

export default routing;