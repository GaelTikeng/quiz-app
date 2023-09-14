const { createUser } = require("../controllers/users");
const { login } = require("../controllers/login");
const express = require("express");
const router = express.Router();
const { getQuizzes, createQuestions } = require("../controllers/quiz");

const { getQuestion } = require("../controllers/question");

const AuthMiddleWare = require("../middlewares/authMiddleWares");

// non protected routes
router.post("/account/signup", createUser);
router.post("/account/login", login);

// protected routes
router.use(AuthMiddleWare);
router.get("/dashboard/:userId", getQuizzes);

router.get("/dashboard/:userId/:quizId", getQuestion);

module.exports = router;
