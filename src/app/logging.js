import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";

export const logger = winston.createLogger({
  handleExceptions: true,
  handleRejections: true,
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.DailyRotateFile({
      filename: path.join("tmp", "%DATE%-combine.log"),
      zippedArchive: true,
      datePattern: "YYYY-MM-DD",
      maxFiles: "15d",
      maxSize: "500m",
    }),
    new winston.transports.DailyRotateFile({
      level: "error",
      filename: path.join("tmp", "%DATE%-error.log"),
      zippedArchive: true,
      datePattern: "YYYY-MM-DD",
      maxFiles: "15d",
      maxSize: "500m",
    }),
  ],
});
