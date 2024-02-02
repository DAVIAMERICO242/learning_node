const express = require('express');
const routes = express.Router();


const authMiddleware = (req, res, next) => {
    if (req.session.name) {
        // Usuário autenticado, permitir que a solicitação prossiga
        next();
    } 
};


routes.get('/',(req,res)=>{
    if(req.session.name){
        console.log('encontrado')
        res.render('./logged/home')
    }else{
        console.log('nao encontrado')
        res.render('./login/init')
    }
})

routes.get('/cadastro',(req,res)=>{//sign up
    res.render('./cadastro/cadastro')
})

routes.post('/autenticar',(req,res)=>{//if auth is ok
    console.log('postado')
    if(req.body.senha=='896321574'){
        console.log('auth')
        res.status(200);
        req.session.name = 'Davi américo'
        res.redirect('/');
    }
    else{
        res.status(400).json({auth:false});
        console.log('fail')
    }
})

routes.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
})

module.exports = {
    routes,
    authMiddleware
}