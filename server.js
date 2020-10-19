//
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const dbConnect = require('./config/db');
const postsRouter = require('./routes/postsRouter');
//
const colors = require('colors');
//
dotenv.config({ path: './config/config.env' });
dbConnect();
//
const app = express();
app.use(express.json());
//
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//
app.use('/api/v1/posts', postsRouter);
//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server is Running on ${PORT} in ${process.env.NODE_ENV} mode`.magenta
  )
);
