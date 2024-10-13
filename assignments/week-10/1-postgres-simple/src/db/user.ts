import { error } from "console";
import { client } from "..";
import { findAncestor } from "typescript";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try {
        const query = {
            text: `
            INSERT INTO users (username, password, name)
            VALUES ($1, $2, $3)
            RETURNING username, password, name;
            `,
            values: [username, password, name]
        }
        const result = await client.query(query)
        return result.rows[0]
    } catch (err) {
        console.error('Error during insert:', err);
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try {
        const query = {
            text: `
                SELECT id, username, name 
                FROM users 
                WHERE id = $1;
                `,
            values: [userId]
        }
        const res = await client.query(query)
        return res.rows[0]
    } catch (err) {
        console.error("Error during getting data");
    }
}
