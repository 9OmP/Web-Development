import { Hono } from 'hono';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const signupSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const userRouter = new Hono();

// Signup route
userRouter.post('/signup', async (c) => {
    const userData = await c.req.json();
    const result = signupSchema.safeParse(userData);
    // console.log(result.data)
    if (!result.success) {
        return c.json({ error: result.error.issues });
    }

    const already_exists = await prisma.user.findFirst({
        where: {
            email: result.data.email
        }
    })
    
    if (!already_exists){
        return c.json({ message: 'User signed up successfully', userData });
    }
    
});




export default userRouter;
