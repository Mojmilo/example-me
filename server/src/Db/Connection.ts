import * as mysql from 'mysql2';
import * as dotenv from 'dotenv';
import { Query } from "./Query";
dotenv.config();

class Connection
{
    private static instance: Connection;
    private static connection = mysql.createConnection({
        // host: process.env.HOST,
        // user: process.env.USER,
        // password: process.env.PASSWORD,
        // database: process.env.DATABASE,
        // port: Number(process.env.PORT)
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'example_me',
        port: 3306
    });

    private constructor() {}

    public static getInstance(): Connection
    {
        if (!Connection.instance)
        {
            Connection.instance = new Connection();
            this.db(this.connection);
        }

        return Connection.instance;
    }

    public static getConnection(): mysql.Connection
    {
        return Connection.connection;
    }

    private static db(connection: mysql.Connection): void
    {
        connection.connect((err) => this.onConnect(err));
    }

    private static onConnect(err): void
    {
        console.log('Connection to database established');
    }

    public query(sql: string): void
    {
        Connection.connection.query(sql, (err, results) => {
            if (err) throw err;
            console.log(results);
        })
    }
}

export { Connection }