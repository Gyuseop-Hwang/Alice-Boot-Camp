module.exports = requestHandler => {
  return function (req, res, next) {
    requestHandler(req, res).catch(err => next(err));
  };
};

module.exports = requestHandler => {
  return async function (req, res, next) {
    try {
      await requestHandler(req, res);
    } catch (err) {
      next(err);
    }
  };
};