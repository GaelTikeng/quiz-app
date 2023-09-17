const { createUser, getCurrentUser } = require("../controllers/users");
const { login } = require("../controllers/login");
const express = require("express");
const router = express.Router();
const { getQuizzes, createQuiz, getQuizByID } = require("../controllers/quiz");

const { getQuestion, createQuestion } = require("../controllers/question");

const AuthMiddleWare = require("../middlewares/authMiddleWares");

// non protected routes
router.post("/account/signup", createUser);
router.post("/account/login", login);
router.post("/currentUser", getCurrentUser);

// protected routes
router.use(AuthMiddleWare);
router.get("/dashboard/:userId", getQuizzes);
router.get("/dashboard/:quizId", getQuizByID)
router.post("/dashboard/:userId/create-quiz", createQuiz)
router.post("/dashboard/:userId/create-question", createQuestion)
router.get("/dashboard/:userId/:quizId", getQuestion);

module.exports = router;
