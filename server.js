const express = require('express');
const request = require('request');
const cors = require('cors'); // Додаємо CORS
const app = express();

app.use(cors()); // Вмикаємо CORS для всіх запитів

app.get('/proxy', (req, res) => {
  const url = 'https://drive.google.com/uc?export=download&id=1nAdSS7x1PMA4f7PKyRqWOoE_16Vga_xp';
  request({ url, encoding: null }, (err, resp, body) => {
    if (!err && resp.statusCode === 200) {
      res.set('Content-Type', 'model/gltf-binary');
      res.send(body);
    } else {
      res.status(500).send('Помилка завантаження');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Проксі-сервер працює на порту ${PORT}`));
