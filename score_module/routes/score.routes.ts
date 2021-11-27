import { Router } from "express";
import { ScoresService } from "../services/score.services";
const { verifyToken } = require("../middlewares/auth.middleware");

const scoresRouter = Router();

const scoresService = new ScoresService();

scoresRouter.post("/", verifyToken, async (req, res) => {
  try {
    res.status(200).send(await scoresService.addScore(req.body));
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

scoresRouter.get("/:userId", verifyToken, async (req, res) => {
  try {
    res
      .status(200)
      .send(await scoresService.getScores(Number(req.params.userId)));
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default scoresRouter;
