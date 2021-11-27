const ObjectId = require("mongoose").Types.ObjectId;
const quizzDAO = require("../dao/quizz.dao");
const axios = require("axios");

exports.getAll = async (queryFilter) => {
  const { label, difficulty } = queryFilter;

  let filters = {
    label: { $regex: label ?? "", $options: "i" },
  };

  difficulty ? (filters.difficulty = difficulty) : null;

  return await quizzDAO.getAll(filters);
};

exports.getOne = async (id) => {
  return await quizzDAO.getById(id);
};

exports.getAnswer = async (body, userId) => {
  const { id, userAnswers, token } = body;

  if (!userAnswers) throw new Error("Aucune réponse retournée");

  const questions = await quizzDAO
    .getQuizzQuestions(id)
    .then(({ questions }) => questions);

  if (userAnswers.length !== questions.length)
    throw new Error("Des réponses sont manquantes");

  userQuizzData = userAnswers.map((answer) => {
    return { _id: new ObjectId(answer._id), answer: answer.answer };
  });

  const goodAnswers = [];
  const badAnswers = [];

  questions.forEach((quizzQuestion) => {
    const question = userQuizzData.find(
      (userQuestion) => String(userQuestion._id) === String(quizzQuestion._id)
    );

    if (question.answer === quizzQuestion.answer)
      return goodAnswers.push(quizzQuestion);

    return badAnswers.push(quizzQuestion);
  });

  const results = {
    goodAnswers,
    badAnswers,
  };

  await axios.post("http://172.20.0.4:8082/scores/", {
    ...results,
    quizzId: id,
    userId,
    token,
  });

  return results;
};
