import express from 'express';
import responseTime from 'response-time';
import helmet from 'helmet';
import morgan from 'morgan';
import chalk from 'chalk';

//Set Class
const app = express();

//APP USE
app.use(express.json());

app.use(helmet());

if (app.get('env') === 'DEV') {
    app.use(responseTime((req, res, time) => {
        console.log(chalk.cyan('\nrespone...'));
        //console.log(req.method, req.url, 'time: ' + time + ' ms');
    }));
    app.use(morgan('tiny'));
}

import routing from './routing';

app.use('/shareed', routing);

app.listen(3000, () => {
    console.log(chalk.magenta(
        "  App is running at localhost:3000 in mode",
        app.get("env"))
    );
    console.log(chalk.magenta("  Press CTRL-C to stop\n"));
});