const router = require("express").Router();
const render = require("../lib/renderTemplate");
const Home = require("../views/Home");
const LoginForm = require('../views/LoginForm')



router.get('/', (req, res) => {
    render(Home, {}, res);
  });

  module.exports = router;