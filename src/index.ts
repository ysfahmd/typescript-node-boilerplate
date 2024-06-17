// This is the barebones of a TypeScript + Express.js back-end. Customize and configure to your liking.

import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// Lookup 'cors' documentation to properly set up.
app.use(cors());

app.get('/where', (req: Request, res: Response) => {
  res.json({
    message: 'is the money'
  });
});

app.listen(1337, (): void => console.log('The server up and running!'));