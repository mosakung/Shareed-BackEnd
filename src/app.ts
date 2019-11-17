//Import Package npm
import express from 'express';
import bodyParser from 'body-parser'
import Joi from 'joi';
import responseTime from 'response-time';
import helmet from 'helmet';
import morgan from 'morgan';
import config from 'config'

//Set Class
const app = express();

app.use(express.json);
app.use(bodyParser.json());

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
import routing from './routing'

app.use('/shareed',routing);

app.get('/hi', (req, res) => {
    res.send('hello');
})

//Server

app.listen(3000, () => {
    console.log('Start server at port 3000.');
});

/*const server = app.listen(3000, () => {
    console.log(
        "  App is running at localhost:3000 in %s mode",
        app.get("env")
    );
    console.log("Press CTRL-C to Terminate server\n");
})

export default {app, server};*/