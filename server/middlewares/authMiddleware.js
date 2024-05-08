// server/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // Add the decoded user ID to the request
            next();
        } catch (error) {
            res.status(401).send('Not authorized');
        }
    } else {
        res.status(401).send('No token provided');
    }
};

module.exports = { protect };
