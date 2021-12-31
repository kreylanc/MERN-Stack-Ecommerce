const notFound = (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const handleError = (err, req, res, next) => {
  //  if there's and error but the status code is still 200 then change to 500
  //  500 = server error
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  //  pass the stack message if the environment value in dotenv file is not in production
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, handleError };
