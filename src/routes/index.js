/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
 * Data: 02/03/2020
 * Author Glaucia Lemos
 */

const express = require('express');
const jwt = require("jsonwebtoken");


const router = express.Router();



const accessTokenSecret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authoarization;
    
    if (authHeader) {
    	
        const token = authHeader.split(' ')[1];


        if(token === accessTokenSecret){
        	next();
        } else {
        	res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
};

router.get('/api',authenticateJWT, (req, res) => {
    console.log(authHeader);
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
    version: '1.0.0',
  });
});

module.exports = router;
