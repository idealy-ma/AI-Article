const jwt = require('jsonwebtoken');
const secret = 'idealy';

exports.requireAuth = (req, res, next) => {
    const token = req.headers.token;
    console.log(req.headers)
    try {
        console.log(jwt.verify(token, secret));
        const decoded = jwt.verify(token, secret);
        req.headers.userId = decoded.userId;
        next();
    } catch (err) {
        // the JWT is invalid
        console.log(err)
        res.status(401).send('Token Invalid');
    }
};
  