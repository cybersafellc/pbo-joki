import { logger } from "../app/logging.js";
import { Response } from "../app/response.js";
import { ResponseError } from "../errors/response-error.js";

const notFound = async (req, res, next) => {
  try {
    throw new ResponseError(404, "page not found");
  } catch (error) {
    next(error);
  }
};

const errorHandler = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }
  if (err instanceof ResponseError) {
    const response = new Response(err.status, err.message, null, null, true);
    res.status(response.status).json(response).end();
  } else {
    const response = new Response(500, err.message, null, null, true);
    res.status(response.status).json(response).end();
    logger.error(err.message);
  }
};

export default { notFound, errorHandler };
