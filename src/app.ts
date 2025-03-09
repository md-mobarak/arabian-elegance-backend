import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import rootRoute from './module/routes';

dotenv.config();
const app = express();
// Use express.json() and express.urlencoded(): Ensure these middlewares are set for parsing form data.
// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: true })); // For handling URL encoded data
app.use(cookieParser());
// CORS কনফিগারেশন
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// OPTIONS রিকোয়েস্ট হ্যান্ডেলিং
app.options('*', cors());
// Use the routes defined in RootRouters
app.use('/api/v1',rootRoute)

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Arabian Elegance E-commerce API');
});


// Allow specific origins in production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-domain.com'] 
    : '*',
  credentials: true
};

app.use(cors(corsOptions));

// Global error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
   res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

export default app;
