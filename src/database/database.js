import mysql from 'promise-mysql';
import db from '../config';

const connection = mysql.createConnection({
    host: db.host,
    database: db.database,
    user: db.user,
    password: db.password,
    port: db.port
});

export const getConnection = () => {
    return connection;
}