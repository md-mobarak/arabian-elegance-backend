"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./module/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Use express.json() and express.urlencoded(): Ensure these middlewares are set for parsing form data.
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: 'http://localhost:3000', credentials: true }));
app.use((0, cors_1.default)({ origin: "http://localhost:3000" }));
app.use(express_1.default.urlencoded({ extended: true })); // For handling URL encoded data
app.use((0, cookie_parser_1.default)());
// CORS কনফিগারেশন
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
// CORS Configuration
const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? ['https://your-frontend-domain.com']
        : 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
};
// OPTIONS রিকোয়েস্ট হ্যান্ডেলিং
app.options('*', (0, cors_1.default)());
// Use the routes defined in RootRouters
app.use('/api/v1', routes_1.default);
// Test Route
app.get('/', (req, res) => {
    res.send('Welcome to Arabian Elegance E-commerce API');
});
// Sample route
app.get("/", (req, res) => {
    res.send("API is running...");
});
// Allow specific origins in production
app.use((0, cors_1.default)(corsOptions));
// Global error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
});
exports.default = app;
// export default app;
