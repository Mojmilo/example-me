import { HttpServer } from "../Server/HttpServer";
import { UserRepository } from "../../Db/Repository/UserRepository";
import {User} from "../../Db/Model/User";

class UserController
{
    private static instance: UserController;
    private static app = HttpServer.getInstance().getApp();
    private static route: string = '/users';

    public static getInstance(): UserController
    {
        if (!UserController.instance)
        {
            UserController.instance = new UserController();
            UserController.app.get(this.route + '/', (req, res) => this.index(req, res));
            UserController.app.get(this.route + '/:id', (req, res) => this.getUser(req, res));
            UserController.app.post(this.route + '/', (req, res) => this.addUser(req, res));
            UserController.app.put(this.route + '/:id', (req, res) => this.updateUser(req, res));
            UserController.app.delete(this.route + '/:id', (req, res) => this.deleteUser(req, res));
        }

        return UserController.instance;
    }

    private static index(req, res, userRepository: UserRepository = UserRepository.getInstance()): void
    {
        // res.send('User page');
        res.send(userRepository.getAll());
    }

    private static getUser(req, res, userRepository: UserRepository = UserRepository.getInstance()): void
    {
        // res.send('User page : get user');
        res.send(userRepository.getAll().filter(user => user.getId() === parseInt(req.params.id)));
    }

    private static addUser(req, res, userRepository: UserRepository = UserRepository.getInstance()): void
    {
        userRepository.add(new User(0, req.body.name, req.body.email, req.body.password), true);
        res.send('User page : add user');
    }

    private static updateUser(req, res, userRepository: UserRepository = UserRepository.getInstance()): void
    {
        userRepository.update(new User(parseInt(req.params.id), req.body.name, req.body.email, req.body.password), true);
        res.send('User page : update user');
    }

    private static deleteUser(req, res, userRepository: UserRepository = UserRepository.getInstance()): void
    {
        userRepository.delete(userRepository.getAll().filter(user => user.getId() === parseInt(req.params.id))[0], true);
        res.send('User page : delete user');
    }
}

export { UserController }