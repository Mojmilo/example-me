import {Connection} from "./Connection";

class Query
{
    private static instance: Query;

    private constructor() {}

    public static getInstance(): Query
    {
        if (!Query.instance)
        {
            Query.instance = new Query();
        }

        return Query.instance;
    }

    public static selectALl(table: string, fields: object): Promise<any>
    {
        return new Promise((resolve, reject) => {
            Connection.getConnection().query(`SELECT * FROM ${table}`, (err, result) => {
                if (err)
                {
                    reject(err);
                }

                resolve(result);
            });
        });
    }

    public static insert(table: string, data: object): Promise<any>
    {
        return new Promise((resolve, reject) => {
            Connection.getConnection().query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
                if (err)
                {
                    reject(err);
                }

                resolve(result);
            });
        });
    }

    public static update(table: string, data: object): Promise<any>
    {
        return new Promise((resolve, reject) => {
            Connection.getConnection().query(`UPDATE ${table} SET ? WHERE id = ?`, [data, data['id']], (err, result) => {
                if (err)
                {
                    reject(err);
                }

                resolve(result);
            });
        });
    }

    public static delete(table: string, data: object): Promise<any>
    {
        return new Promise((resolve, reject) => {
            Connection.getConnection().query(`DELETE FROM ${table} WHERE id = ?`, data['id'], (err, result) => {
                if (err)
                {
                    reject(err);
                }

                resolve(result);
            });
        });
    }
}

export { Query }