const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Укажите путь к вашему фронтенду
app.use(express.static(path.join(__dirname, '/build')));

// Обработка всех маршрутов, чтобы они указывали на ваш index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});