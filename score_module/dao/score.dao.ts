import {
  Score,
  ScoreAttributes,
  ScoreInputAttributes,
} from "../models/score.model";

export class ScoreDAO {
  public async addScore(score: ScoreInputAttributes): Promise<ScoreAttributes> {
    return await Score.create(score);
  }

  public async getScores(
    userId: ScoreInputAttributes["id"]
  ): Promise<ScoreAttributes[]> {
    return await Score.findAll({ where: { userId } });
  }
}
