import express from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.json({
        data: 'hello world',
    })
})

app.listen(3000, () => {
    console.log(`Listening on PORT: ${3000}`)
})
