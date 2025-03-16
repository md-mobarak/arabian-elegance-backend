// import express, { NextFunction, Request, Response } from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import rootRoute from './module/routes';

// dotenv.config();
// const app = express();
// // Use express.json() and express.urlencoded(): Ensure these middlewares are set for parsing form data.
// // Middleware
// app.use(express.json());
// app.use(cors({ origin: 'https://arabian-elegance-03.vercel.app', credentials: true }));
// app.use(cors({ origin: "https://arabian-elegance-03.vercel.app" }));
// app.use(express.urlencoded({ extended: true })); // For handling URL encoded data
// app.use(cookieParser());
// // CORS কনফিগারেশন
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
// }));
// // CORS Configuration
// const corsOptions = {
//   origin: process.env.NODE_ENV === 'production' 
//     ? ['https://arabian-elegance-03.vercel.app'] 
//     : 'http://localhost:3000',
//   credentials: true,
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
// };
// // OPTIONS রিকোয়েস্ট হ্যান্ডেলিং
// app.options('*', cors());
// // Use the routes defined in RootRouters
// app.use('/api/v1',rootRoute)

// // Test Route
// app.get('/', (req: Request, res: Response) => {
//   res.send('Welcome to Arabian Elegance E-commerce API');
// });

// // Sample route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });
// // Allow specific origins in production


// app.use(cors(corsOptions));

// // Global error handling middleware
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//    res.status(err.status || 500).json({
//     success: false,
//     message: err.message || 'Internal Server Error',
//   });
// });

// export default app;
// // export default app;


import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import rootRoute from './module/routes';

dotenv.config();
const app = express();

// Configure CORS first
const allowedOrigins = [
  'https://arabian-elegance-03.vercel.app',
  // 'https://arabianelegancebd.com',
  'http://localhost:3000'
];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
};

// Apply CORS middleware before other routes
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

// Standard middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/v1', rootRoute);

// Test routes
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Arabian Elegance E-commerce API');
});

// Error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

export default app;