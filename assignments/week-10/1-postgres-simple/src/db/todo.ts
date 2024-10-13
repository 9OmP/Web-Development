import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try {
        const query = {
            text: `
                INSERT INTO todos( user_id, title, description) 
                VALUES ($1, $2, $3)
                RETURNING title, description, done, id
                `,
            values: [userId, title, description]
        }
        const result = await client.query(query)
        return result.rows[0]
    } catch (err) {
        console.error("Error during INSERTING", err);
    }
}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try {
        const query = {
            text: `
                UPDATE todos
                SET done = true
                WHERE id = $1
                RETURNING title, description, done, id
                `,
                values: [todoId]
        }
        const result = await client.query(query)
        return result.rows[0]
    } catch(err){
        console.error("Error during UPDATE");
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try {
        const query = {
            text: `
                SELECT id, title, description, done, user_id 
                FROM todos
                WHERE user_id = $1
            `,
            values: [userId]
        }
    const result = await client.query(query)
    return result.rows || [];
    } catch (err) {
        console.error("Error during GET");
    }
}