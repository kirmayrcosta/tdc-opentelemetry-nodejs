require('./tracer')
const express = require('express')
const app = express()
const port = 3001

const talks =[
    {
        idSpeaker: 1,
        name: 'Criando npm scripts cross plataforma',
    },
    {
        idSpeaker: 2,
        name: 'Utilizando OpenTelemetry para aumentar o nível de observabilidade das suas aplicações em Nodejs.',
    },
    {
        idSpeaker: 3,
        name: 'Estratégias para Escalabilidade Horizontal com Node.js',
    },
    {
        idSpeaker: 4,
        name: 'Apify e Crawlee - transformando nodejs na melhor ferramenta de scraping',
    },
    {
        idSpeaker: 5,
        name: 'Feitiçaria ou tecnologia: Websockets com Node.js mas sem servidores?',
    },
    {
        idSpeaker: 6,
        name: 'Utilizando arquitetura hexagonal para uma abordagem evolucionária em aplicações Node.js',
    },
    {
        idSpeaker: 7,
        name: 'Node.js e K6: uma combinação poderosa para teste de performance',
    },
];

app.get('/v1/talks', (req, res) => {
    res.json(talks)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

