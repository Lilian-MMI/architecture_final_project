import { ScoreInputAttributes, ScoreAttributes } from "../models/score.model";
import { ScoreDAO } from "../dao/score.dao";

export class ScoresService {
  private scoreDAO: ScoreDAO = new ScoreDAO();

  public async addScore(body: ScoreInputAttributes): Promise<ScoreAttributes> {
    const score: ScoreInputAttributes = {
      ...body,
      grade: `${body.goodAnswers.length}/${
        body.goodAnswers.length + body.badAnswers.length
      }`,
    };
    return await this.scoreDAO.addScore(score);
  }

  public async getScores(
    userId: ScoreAttributes["id"]
  ): Promise<ScoreAttributes[]> {
    return await this.scoreDAO.getScores(userId);
  }
}
