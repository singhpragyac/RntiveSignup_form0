import JWT from "jsonwebtoken";

 export const authMiddleware =  (req, res, next) => {

    const token = req.headers.authorization;
    console.log(process.env.JWT_SECRET)
    console.log(token)
    try {
        const decoded = JWT.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user = decoded;
        next();

    } catch(error) {
        return res.status(401).send({
            success: false,
            message: "invalid or expired token"
        });
    }
};




