const express = require('express');
const app = express();

app.get('/oi', (req, res)=>{
    res.status(200).send({message: 'Rota Oi'});
})

app.get('/ola', (req, res)=>{
    res.status(200).send({message: 'Rota Ola'});
})

app.listen(3001, ()=>{
    console.log('API rodando na porta 3001');
})
