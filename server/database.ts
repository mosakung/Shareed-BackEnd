const mysql = require('mysql');

export default class database {
    private connection;
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'SharedED'
        });
        this.connection.connect((err=> {
          if(err){
              console.error('Error to connect db',err);
                throw(err);
          }
          console.log('connect to db....'); 
        }));
    }

    query(sql,agrs) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.connection.query(sql,agrs, (err, result) => {
                    if (err)
                        return reject(err);
                    resolve(result);
                });
            }, 10000);
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