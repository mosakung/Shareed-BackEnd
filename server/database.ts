const mysql = require('mysql');

export default class database {
    private connection;
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'ShareED'
        });
        this.connection.connect((err => {
            if (err) {
                console.error('Error to connect db', err);
                throw (err);
            } else {
                console.log('connect to db....');
            }
        }));
    }

    query(sql, agrs) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, agrs, (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}