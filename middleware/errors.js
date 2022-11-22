export const createErrorMissingPath = (req, res, next) => {
  let pathError = new Error('There is no path here/ wrong url');
  pathError.status = 404;
  next(pathError);
  //throw pathError
};

export const errorMiddleWare = (error, req, res, next) => {
  //deal with error
  //1: console
  console.log('in our middleware for errors', error);
  //2: send response
  res.status(error.status || 500).send({
    serveError: {
      message: error.message || 'Internal server error',
    },
  });
};
