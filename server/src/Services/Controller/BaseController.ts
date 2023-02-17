import { HttpServer } from "../Server/HttpServer";

class BaseController
{
    private static instance: BaseController;
    private static app = HttpServer.getInstance().getApp()

    public static getInstance(): BaseController
    {
        if (!BaseController.instance)
        {
            BaseController.instance = new BaseController();
            BaseController.app.get('/', (req, res) => BaseController.index(req, res));
        }

        return BaseController.instance;
    }

    private static index(req, res): void
    {
        res.send('Base page');
    }
}

export { BaseController }