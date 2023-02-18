class User
{
    private id: number;
    private name: string;
    private email: string;
    private password: string;

    public constructor(id: number, name: string, email: string, password: string)
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public getId(): number
    {
        return this.id;
    }

    public getName(): string
    {
        return this.name;
    }

    public getEmail(): string
    {
        return this.email;
    }

    public getPassword(): string
    {
        return this.password;
    }

    public setId(id: number): void
    {
        this.id = id;
    }
}

export { User }