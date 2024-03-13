
import jwt from 'jsonwebtoken';

const requireAuth = (req, res, next) => {
    const token = req.headers.authorization.replace(/^Bearer\s+/i, '');
    console.log(token, "token4");

    if (token) {
        jwt.verify(token, "KIRAN", (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.status(401).json("Invalid Token");
            } else {
                const userId = decodedToken.id;
                req.userId = userId;
                next();
            }
        });
    } else {
        res.status(401).json("Restricted");
    }
};

export default requireAuth;