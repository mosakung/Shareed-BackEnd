import express from 'express';

const router = express('Router');

router.get('/Say', (req, res) => {
    res.send('Hi');
})

export default router;