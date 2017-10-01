const saveCookies = (req, res) => {
  let propNames = Object.keys(req.body);

  propNames.forEach((propName) => {
    res.cookie(propName, req.body[propName]);
  });
};

module.exports = {
  saveCookies
};
