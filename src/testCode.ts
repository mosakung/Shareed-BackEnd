//Import Module
import express from 'express';
import Joi from 'joi';
import responseTime from 'response-time';
import helmet from 'helmet';
import morgan from 'morgan';
import config from 'config'

//Require Module
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

//Set Class
const app = express();

//PROCESS_ENV
console.log(`NODE_ENV: ${process.env.NODE_ENV}` + ` || app: ${app.get('env')}`);

//APP USE
app.use(express.json());

app.use(helmet());

if (app.get('env') === 'DEV') {
    app.use(responseTime((req, res, time) => {
        console.log('\nrespone...');
        //console.log(req.method, req.url, 'time: ' + time + ' ms');
    }));
    app.use(morgan('tiny'));
}

//Test Code

import database from '../server/database';

const db = new database();

const result: any = db.query('SELECT * FROM reviewbook WHERE ReviewBookID = a1000000001',[]);

console.log(result);
//

//Server
app.listen(3000, () => {
    console.log('Start server at port 3000.');
});