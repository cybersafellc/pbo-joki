import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import errorMiddleware from "../middlewares/error-middleware.js";

export const web = express();
web.use(cors());
web.use(cookieParser());
web.use(bodyParser.json());
web.use("/", express.static("public"));
web.use(errorMiddleware.notFound);
web.use(errorMiddleware.errorHandler);
