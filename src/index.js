import http from 'http';
import express from 'express';
import logger from 'logfmt';
import path from 'path';

const app = express();
const server = http.createServer(app);
const APP_PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'HelloApp';
app.use(logger.requestLogger());
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));
//app.use((req, res, next) => res.redirect('/'));

server.listen(APP_PORT, () => {
  console.log(`Starting ${APP_NAME} Server on port ${APP_PORT}`);
});

process.on('SIGINT', (err) => {
  if (err) console.error(err.stack);
  console.log(`\nStop ${APP_NAME} Server`);
  process.exit((err)? 1 : 0 );
});
