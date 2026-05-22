const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(mongoSanitize());

app.use(xss());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/products", require("./routes/productRoutes"));

app.use("/api/orders", require("./routes/orderRoutes"));

app.use("/api/users", require("./routes/userRoutes"));

app.use("/api/analytics", require("./routes/analyticsRoutes"));


// Error Middleware
const errorHandler = require("./middleware/errorMiddleware");

app.use(errorHandler);

module.exports = app;