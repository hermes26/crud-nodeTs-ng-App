import mysql from "promise-mysql";

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('Database is connected');
    });


    // pool.getConnection((err, connection) => {
    //     if (err) {
    //         if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    //             console.error('Database connection was closed.')
    //         }
    //         if (err.code === 'ER_CON_COUNT_ERROR') {
    //             console.error('Database has too many connections.')
    //         }
    //         if (err.code === 'ECONNREFUSED') {
    //             console.error('Database connection was refused.')
    //         }
    //     }
    //     if (connection) connection.release()
    //     return
    // })    

export default pool;    

