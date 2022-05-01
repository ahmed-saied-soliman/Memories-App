import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import userRoutes from './routes/user.js';
import postsRoutes from './routes/posts.js';

// Load config
dotenv.config({ path: './config/config.env' });

// connect DB
connectDB();

const app = express();

// Body parser
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

// Routes
app.use('/user', userRoutes);
app.use('/posts', postsRoutes);

app.get('/', (req, res) => {
  res.send('Hello to Memories API');
});

app.listen(
  process.env.PORT,
  console.log(`Server running on ${process.env.PORT}...`)
);
