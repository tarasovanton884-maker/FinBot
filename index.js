
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let users = [];

// AI-совет (фиксированный для упрощенного MVP)
app.post('/advice', (req, res) => {
    res.send({ advice: 'Совет: откладывай 20% дохода!' });
});

// Проверка премиум
app.get('/premium/:email', (req, res) => {
    const user = users.find(u => u.email === req.params.email);
    res.send({ premium: user ? user.premium : false });
});

// Подписка (фиксированная ссылка для MVP)
app.post('/subscribe', (req, res) => {
    res.send({ url: 'https://buy.stripe.com/test_subscription_link' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
