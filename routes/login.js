const router = require("express").Router();
const render = require("../lib/renderTemplate");
const LoginForm = require("../views/LoginForm");


router.get('/', (req, res) => {
    console.log('frfd');
  render(LoginForm, {}, res);
});


router.post('/', async(req, res) => {
  
    const { name, pass } = req.body;
    // let user = {};

console.log(name, pass);
    
   
//     // user = await User.findOne({where: { name: name }});
//     // if(!user) return failAuth(res, 'неверное имя или пароль!');
//     // // console.log(user);
    
    
//     // const isValidPassword = await bcrypt.compare(pass, user.password);
//     // if(!isValidPassword) return failAuth(res, 'неверное имя или пароль!!!');
//     // req.session.user = user;
//     // const userInfo = req.session?.user;
//     // const lib = await Post.findAll({raw: true})
//     // const users = await User.findAll({raw: true})
//     render( Home, { name, pass }, res)
    
  })
module.exports = router;