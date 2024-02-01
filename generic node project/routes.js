const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    if(req.session.name){
        res.send('You are already logged')
    }else{
        res.render('./login/init')
    }
})

routes.get('/cadastro',(req,res)=>{//sign up
    res.render('./cadastro/cadastro')
})

routes.post('/autenticar',(req,res)=>{//if auth is ok
    if(req.body.login!='davi'){
        res.render('./login/fail')
    }
    else{
        res.render('./logged/home')
        req.session.name = 'Davi américo'
    }
})

routes.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
})

module.exports = {
    routes
}