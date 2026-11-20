// middleware/errorHandler.js
// 404 handler and central error handler

// 404 Not Found handler
function notFound(req, res, next) {
  const err = new Error('Page not found');
  err.status = 404;
  next(err);
}

// Centralized error handler
function errorHandler(err, req, res, next) {
  // set locals, providing error only in development
  const status = err.status || 500;
  res.status(status);
  // render the error view
  res.render('error', {
    status,
    message: err.message,
    // show stack trace only when not in production
    stack: process.env.NODE_ENV !== 'production' ? err.stack : null,
  });
}

module.exports = { notFound, errorHandler };

