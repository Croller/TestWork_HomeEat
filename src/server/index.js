const express = require('express');
const path = require('path');
const cors = require('cors');

require('dotenv').config({
  path: path.resolve('.env'),
});

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));

app.use('/dist', express.static(path.resolve('dist')));
app.use('/static', express.static(path.resolve('src/server/static')));

if (process.env.NODE_ENV === 'development') {
  const server = app.listen(process.env.LOCAL_SERVER_PORT);
  server.setTimeout(5100);
}

console.log(`Server listen on port ${process.env.NODE_ENV === 'development' ? process.env.LOCAL_SERVER_PORT : process.env.HOST_SERVER_PORT}`);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});
