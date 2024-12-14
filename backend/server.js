import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import cors from "cors";
/* ENV VARIABLES */
import { VITE_BASE_URL, APP_PORT, MONGO_DB_URI } from "./config/index.js";
/* IMPORT ALL ROUTES */
import {
  almirahRouter,
  authRouter,
  batchRouter,
  bookRouter,
  categoryRouter,
  clearanceRouter,
  departementRouter,
  eBookRouter,
  genralRouter,
  studentRouter,
  teacherRouter,
  transactionRouter,
} from "./routes/index.js";
import { errorHandlerMiddleware } from "./middlewares/index.js";
console.log("dine ");
/* CONFIGURATION */
const app = express();
app.use(express.json({ limit: "5mb" }));

const prodOrigins = [
  process.env.ORIGIN_1 , 
  process.env.ORIGIN_2 
];
const devOrigin = ['http://localhost:5173'];
const allowedOrigins = process.env.NODE_ENV === 'production' ? prodOrigins : devOrigin;

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      if (process.env.NODE_ENV === 'development') {
        console.log(origin, allowedOrigins); // Log only in development
      }
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow credentials (cookies, HTTP authentication, etc.)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods for CORS
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* ABSOLUTE PATH OF BACKEND FOLDER */
const __filename = fileURLToPath(import.meta.url);
export const ROOT_PATH = path.dirname(__filename);

/* STATIC FOLDER */
app.use("/public", express.static("./public"));
app.use("/uploads", express.static("./uploads"));
app.use("/documents", express.static("./documents")); 

/* MONGOOSE SETUP */
mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log("MONGO DB CONNECTED SUCCESSFULLY 😍😍");
    /* CREATE SERVER */
    app.listen(process.env.PORT, () => {
      console.log(`SERVER IS LISTNING ON PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("SOMETHING WENT WRONG WHILE CONNECTING TO MONGO DB 😢😢", err);
    process.exit(1); // Ensure the app doesn't start if DB connection fails
  });

/* ROUTES */
app.use("/api/auth", authRouter);
app.use("/api/batches", batchRouter);
app.use("/api/teachers", teacherRouter);
app.use("/api/departements", departementRouter);
app.use("/api/students", studentRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/almirahs", almirahRouter);
app.use("/api/books", bookRouter);
app.use("/api/ebooks", eBookRouter);
app.use("/api/transactions", transactionRouter);
app.use("/api/genral", genralRouter);
app.use("/api/clearance", clearanceRouter);

/* ERROR HANDLER MIDDLEWARE */
app.use(errorHandlerMiddleware);
