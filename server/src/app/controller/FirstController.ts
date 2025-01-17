//Import request and response from express
import { Request, Response } from "express";
//Create the class FirstController 
class FirstController {

    //Create the method home to reponse the home request
    public home(req: Request, res: Response) {
        return res.json({
            response: 'Hello World2'
        });
    }
}
//Export a instance of FistController has a module
export const firstController = new FirstController();