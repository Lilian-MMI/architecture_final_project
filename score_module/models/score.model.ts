// /models/book.ts
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";

interface ScoreAttributes {
  id?: number;
  grade: string;
  goodAnswers: string;
  badAnswers: string;
  userId: number;
  quizzId: number;
}

interface ScoreInputAttributes
  extends Optional<ScoreAttributes, "id" | "grade"> {}

interface ScoreInstance
  extends Model<ScoreAttributes, ScoreInputAttributes>,
    ScoreAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Score = sequelize.define<ScoreInstance>(
  "Score",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    grade: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    goodAnswers: {
      allowNull: false,
      type: DataTypes.STRING,
      get: function () {
        return JSON.parse(this.getDataValue("goodAnswers"));
      },
      set: function (val) {
        return this.setDataValue("goodAnswers", JSON.stringify(val));
      },
    },
    badAnswers: {
      allowNull: false,
      type: DataTypes.STRING,
      get: function () {
        return JSON.parse(this.getDataValue("badAnswers"));
      },
      set: function (val) {
        return this.setDataValue("badAnswers", JSON.stringify(val));
      },
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    quizzId: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
    },
  },
  {
    tableName: "scores",
  }
);

export { Score, ScoreAttributes, ScoreInputAttributes };
