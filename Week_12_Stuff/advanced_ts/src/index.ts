// interface User {
//     id: string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// type API = {
//     endpoint: string,
//     apikey: string
// }

// const config: Readonly<API> = {
//     endpoint: 'www.api.com/',
//     apikey: 'lxcvnvknv',
// }

// type UpdateProps = Pick<User, 'name' | 'age' >
// type UpdatePropsOptional = Partial<UpdateProps>

// const displayUserProfile = (user: UpdatePropsOptional)  => {
//     console.log('Name: ' + user.name)
//     console.log('Age: ' + user.age)
// }

// // displayUserProfile({name: 'Om Patil'})
// type User = {
//     id: string,
//     name: string,
//     age: number
// }

// // type Users = {
// //     [key: string]: User
// // }

// // type Users = Record<string, User>
// const users = new Map<string, User>()
// users.set("ascndjvn", {
//         id: 'ascndjvn',
//         name: 'Om',
//         age: 22,
//     })
// users.set("vjdnvdjn",{
//         id: 'vjdnvdjn',
//         name: 'Sus',
//         age: 22,
//     })

// const user = users.get("vjdnvdjn")
// // console.log(user)
// // const users: Users = {
//     // "ascndjvn" : {
//     //     id: 'ascndjvn',
//     //     name: 'Om',
//     //     age: 22,
//     // },
//     // "vjdnvdjn" : {
//     //     id: 'vjdnvdjn',
//     //     name: 'Sus',
//     //     age: 22,
//     // }
// // }

// type EventType = 'scroll' | 'click' | 'mousemove'
// type ExcludeEvent = Exclude<EventType, 'scroll'>

// const handleExclude =  (event: ExcludeEvent) => {
//     console.log(`Handling Event: ${event}`)
// }

// // handleExclude('mousemove')

// import express, { Request, Response } from 'express';
// import z from 'zod';

// const app = express();

// // Enable JSON body parsing middleware
// app.use(express.json());

// const UserProfileSchema = z.object({
//     name: z.string().min(1),
//     email: z.string().email(),
//     age: z.number().int().min(18).optional(),
// });

// // Infer the type based on the schema
// type FinalUserSchema = z.infer<typeof UserProfileSchema>; 

// // Define the PUT route with a specific path
// app.put('/user/profile', (req: Request, res: Response) => {
//     const parseResult= UserProfileSchema.safeParse(req.body);
//     if (!parseResult.success) {
//         return res.status(400).json({ message: 'Invalid Request' });
//     }
//     console.log(parseResult.data);  // You can use parseResult.data here
//     return res.json({ message: 'User Profile Updated Successfully' });
//     // Update db here
// });

// Start the server
// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });

import { Client } from "hono/dist/types/client/types";