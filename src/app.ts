//Import Package npm
import express from 'express';
import bodyParser from 'body-parser'
import Joi from 'joi';
import responseTime from 'response-time';
import helmet from 'helmet';
import morgan from 'morgan';
import config from 'config'

//Import Router

//Set Class
const app = express();

app.use(express.json);
app.use(bodyParser.json());

//PROCESS_ENV
console.log(`NODE_ENV: ${process.env.NODE_ENV}` + ` || app: ${app.get('env')}`);

//APP USE
app.use(helmet());

if (app.get('env') === 'DEV') {
    app.use(responseTime((req, res, time) => {
        console.log('\nrespone...');
        //console.log(req.method, req.url, 'time: ' + time + ' ms');
    }));
    app.use(morgan('tiny'));
}

//Router
import router from './router'

app.use('/shareed',router)

//Server

const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("Press CTRL-C to Terminate server\n");
})

export default {app, server};