import { Response, NextFunction } from 'express'; // Import the types from Express
import jwt from 'jsonwebtoken';
import response from '../HttpRespose/HttpRespose';
import mongoose from 'mongoose';
const SECRET:string = process.env.JWT_SECRET|| '';

// Define the user object type
interface User {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    phone:string
}

// Generate a JWT token
const generateToken = (user: User): string => {
    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone:user.phone,
    };
    const options = {
        // expiresIn: '1h', // Token expiration time (optional)
    };
    return jwt.sign(payload, SECRET, options);
};

// Verify a JWT token
const verifyToken = (req: any, res: Response, next: NextFunction) => {
    const token = req.header('token');
    // console.log(token)
    if (!token) {
        response.unAuthorized(res, 'Access denied. Token is missing.');
    }
    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();decoded
    } catch (error) {
        response.unAuthorized(res, 'Access denied. Invalid token.');
    }
};

export { generateToken, verifyToken };
