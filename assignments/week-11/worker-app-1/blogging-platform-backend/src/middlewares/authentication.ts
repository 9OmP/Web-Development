import { Context, Next } from 'hono';
import jwt, { verify } from 'jsonwebtoken';

const secretKey = 'your-secret-key';

const myMiddleware = async (c: Context, next: Next) => {

    console.log('Authenticating user...');
    const authHeader = c.req.header('Authorization');    
    const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : ''
    try {
        const decoded = jwt.verify(token, secretKey);
        await next();
    } catch (err) {
        console.log("Invalid token");
    }
};

