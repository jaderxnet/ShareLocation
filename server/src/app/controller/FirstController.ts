import { Request, Response } from "express";

class FirstController {

    public home(req: Request, res: Response) {
        return res.json({
            response: 'Hello World2'
        });
    }
}

export const firstController = new FirstController();