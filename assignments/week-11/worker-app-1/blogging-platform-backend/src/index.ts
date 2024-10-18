import { Hono } from 'hono';
import userRouter from './router/user';

const app = new Hono();

// Use the user router, including the /signup route
app.route('/user', userRouter);

// Start the server
app.fire();


export default app