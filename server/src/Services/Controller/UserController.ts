import { HttpServer } from "../Server/HttpServer";

class UserController
{
    private static instance: UserController;
    private static app = HttpServer.getApp()

    public static getInstance(): UserController
    {
        if (!UserController.instance)
        {
            UserController.instance = new UserController();
            UserController.app.get('/users', (req, res) => UserController.index(req, res));
            UserController.app.get('/users/:id', (req, res) => UserController.getUser(req, res));
            UserController.app.post('/users', (req, res) => UserController.addUser(req, res));
            UserController.app.put('/users/:id', (req, res) => UserController.updateUser(req, res));
            UserController.app.delete('/users/:id', (req, res) => UserController.deleteUser(req, res));
        }

        return UserController.instance;
    }

    private static index(req, res): void
    {
        res.send('User page');
    }

    private static getUser(req, res): void
    {
        res.send('User page : get user');
    }

    private static addUser(req, res): void
    {
        res.send('User page : add user');
    }

    private static updateUser(req, res): void
    {
        res.send('User page : update user');
    }

    private static deleteUser(req, res): void
    {
        res.send('User page : delete user');
    }
}

export { UserController }