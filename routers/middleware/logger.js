function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} ${req.get(
      'host'
      )}`
    );
  
    next()
  }

module.exports = logger;