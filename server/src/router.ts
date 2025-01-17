//Import class Router from express
import { Router } from "express";
//Import a instance of the class firstController 
// from FirstController as a module
import { firstController } from "./app/controller/FirstController";

//Initialize router
const router: Router = Router()

//Routate home to fistController home
router.get("/", firstController.home);

//Create router variable in context like a module
export { router };