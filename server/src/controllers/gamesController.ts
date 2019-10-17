import { Request, Response } from "express";

class GamesController {
    public index(req: Request, res: Response) {
        res.send('games')};
}

const gamesController = new GamesController();
export default gamesController;