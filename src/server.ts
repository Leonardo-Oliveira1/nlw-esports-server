import express from 'express'

const app = express();

app.get('/ads', (request, response) => {
    response.json([
        { id: 1, name: "Anúncio 1"},
        { id: 2, name: "Anúncio 2"},
        { id: 3, name: "Anúncio 36"},
    ])
})

app.listen(3333)