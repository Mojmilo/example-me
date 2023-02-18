import { User } from "../Model/User";
import {Query} from "../Query";

class UserRepository
{
    private static instance: UserRepository;
    private static users: Array<User> = [];

    private constructor() {}

    public static getInstance(): UserRepository
    {
        if (!UserRepository.instance)
        {
            UserRepository.instance = new UserRepository();
        }

        return UserRepository.instance;
    }

    public getAll(): Array<User>
    {
        let promise: Promise<any> = Query.selectALl('user', {});
        promise.then((result) => {
            UserRepository.users = result;
        });
        return UserRepository.users;
    }

    public add(user: User, push: boolean = false): void
    {
        if (push) {
            let promise: Promise<any> = Query.insert('user', user);
            promise.then((result) => {
                user.setId(result.insertId);
            });
        }
        UserRepository.users.push(user);
    }

    public update(user: User, push: boolean = false): void
    {
        if (push) {
            let promise: Promise<any> = Query.update('user', user);
        }
        UserRepository.users = UserRepository.users.map((u) => {
            if (u.getId() === user.getId()) {
                return user;
            }

            return u;
        });
    }

    public delete(user: User, push: boolean = false): void
    {
        if (push) {
            let promise: Promise<any> = Query.delete('user', user);
        }
        UserRepository.users = UserRepository.users.filter((u) => {
            return u.getId() !== user.getId();
        });
    }
}

export { UserRepository }