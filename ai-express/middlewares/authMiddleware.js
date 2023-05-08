const jwt = require('jsonwebtoken');
const secret = 'idealy';

exports.requireAuth = (req, res, next) => {
    const token = req.headers.token;
    try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        // the JWT is invalid
        console.log(err)
        res.status(401).send('Token Invalid');
    }
};
  