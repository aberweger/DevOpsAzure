'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('!!! Hello DevOps FS2024. In acht Tagen ist Abgabetermin. Nicht vergessen! Ich wünsch noch viel Erfolg.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
