import express from 'express';

//Import router feature
import routerShareNote from './router/ShareNote-Router';

const routerMain = express('Router');

routerMain.get('/Say', (req, res) => {
    res.send('Hi');
})

routerMain.use('/share-note',routerShareNote);

export default routerMain;