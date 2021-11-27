const Question = require("../models/question.model");
const Quizz = require("../models/quizz.model");

exports.getAll = async (filters) => {
  const quizz = await Quizz.find({ $and: [filters] });

  return {
    quizz,
  };
};

exports.getById = async (id) => {
  const quizz = await Quizz.findById(id);

  return {
    quizz,
  };
};

exports.getQuizzQuestions = async (id) => {
  const quizz = await Quizz.findById(id);
  const questions = await Question.find({ _id: { $in: quizz.questions } });

  return {
    questions,
  };
};
