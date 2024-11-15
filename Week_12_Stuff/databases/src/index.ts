import e from 'express'
import { Client } from 'pg'

const client = new Client({
    connectionString: "postgresql://neondb_owner:TDnW9m4tAbpU@ep-square-fire-a13hhqvc.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
})

async function createTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP    
        );
    `)
    console.log(result)
}

// createTable()

async function insertIntoTable(){
    await client.connect()
    const username: string = 'username1_here';
    const email: string = 'username1@email.com';
    const password: string = 'password1_here';

    const result = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ( $1, $2, $3 );
    `, [username, email, password])
    console.log(result)
}

// insertIntoTable()

async function updateTable(){
    await client.connect()
    const result = await client.query(`
        UPDATE users
        SET username = 'new_username_here', email = 'new_username@email.com', password = 'new_password_here' 
        WHERE username = 'username_here' AND email = 'username@email.com' AND password = 'password_here' 
    `)
    console.log(result)
}

// updateTable()

async function showTable(){
    await client.connect()
    const result = await client.query(`
        SELECT * FROM users 
    `)
    console.log(result.rows)
}

// showTable()
