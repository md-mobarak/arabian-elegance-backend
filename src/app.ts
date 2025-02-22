import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import rootRoute from './module/routes';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());

// Use the routes defined in RootRouters
app.use('/api/v1',rootRoute)

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Arabian Elegance E-commerce API');
});

// Global error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

export default app;
