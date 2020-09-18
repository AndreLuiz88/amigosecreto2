'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "AmigoSecreto API",
        version: "0.0.1"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});
const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        itemdesejo: req.body
    });
});

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

app.use('/', route);
app.use('/participantes', create);
app.use('/participantes', put);
app.use('/participantes', del);

module.exports = app;

var nodemailer = require("nodemailer");

var remetente = nodemailer.createTransport({
    host: "smtp.live.com",
    service: "hotmail",
    port: 587,
    secure: false,
    auth:{
    user: "email@email.com",
    pass: "Sua Senha" }
    });

    var emailASerEnviado = {
        from: "email@email.com",
        to: "email@email.com",
        subject: "Enviando Email com Node.js",
        text: "Estou te enviando este email com node.js",
        };

        remetente.sendMail(emailASerEnviado, function(error){
            if (error) {
            console.log(error);
            } else {
            console.log("Email enviado com sucesso.");
            }
            });