const express = require('express');
const cors =  require('cors');

const app = express()

app.use(express.json());
app.use(cors());

const reactions = [
    {
        text: `I'm happy!`,
        emoji: `&#128512;`
    },
    {
        text: `I'm sad...`,
        emoji: `&#128577;`
    },
    {
        text: `I'm sick`,
        emoji: `&#129298;`
    },
    {
        text: `I'm angry!!!`,
        emoji: `&#128544;`
    }
]

app.get('/reaction', (_, res) => {
    const randomReactionIdx = Math.floor((Math.random() * reactions.length ))
    const reaction = reactions[randomReactionIdx ?? 0]
    res.json(reaction)
})

app.listen('3000', () => console.log('Server is running on port 3000...'))