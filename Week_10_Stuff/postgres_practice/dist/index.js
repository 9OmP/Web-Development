"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:CUwQPby05IHc@ep-icy-paper-a13i99sa.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
});
// setTimeout(async()=>{
//     client.connect()
//     const res = await client.query(`CREATE TABLE addresses (
//         id SERIAL PRIMARY KEY,
//         user_id INTEGER NOT NULL,
//         city VARCHAR(100) NOT NULL,
//         country VARCHAR(100) NOT NULL,
//         street VARCHAR(255) NOT NULL,
//         pincode VARCHAR(20),
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//         FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//     );`)
// }, 1000)
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const insertQuery = `INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3);`;
            const values = [username.trim().toLowerCase(), email.trim().toLowerCase(), password.trim().toLowerCase()];
            const res = yield client.query(insertQuery, values);
            console.log("INSERTION SUCCESS ", res);
        }
        catch (err) {
            console.error("Error during Insertion", err);
        }
        finally {
            yield client.end();
        }
    });
}
function getData(username) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const getQuery = {
                text: "SELECT * FROM users WHERE username = $1",
                values: [username.trim()]
            };
            const res = yield client.query(getQuery);
            console.log("Finding for: ", username.trim());
            console.log(res.rows);
        }
        catch (err) {
            console.error("Error during fetching data", err);
        }
        finally {
            client.end();
        }
    });
}
function updateData(email, new_password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const getQuery = {
                text: `UPDATE users 
                SET password = $2
                WHERE email = $1`,
                values: [email.trim(), new_password.trim()]
            };
            const res = yield client.query(getQuery);
            if (res) {
                console.log("UPDATE SUCCESS ", res);
            }
        }
        catch (err) {
            console.error("Error during fetching data", err);
        }
        finally {
            client.end();
        }
    });
}
function deleteData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const getQuery = {
                text: `DELETE  FROM users WHERE id = $1`,
                values: [id]
            };
            const res = yield client.query(getQuery);
            console.log(res);
            console.log("DELETE SUCCESSFUL");
        }
        catch (err) {
            console.error("Error during fetching data", err);
        }
        finally {
            client.end();
        }
    });
}
// setTimeout(async()=>{
//     await client.connect()
//     const res = await client.query(`
//         INSERT INTO addresses (user_id, city, country, street, pincode)
//         VALUES (1, 'Bangalore', 'India', 'street1', 560001),
//         (2, 'Mumbai', 'India', 'street2', 400001),
//         (3, 'Delhi', 'India', 'street3', 110001);
//     `)
//     if (res){
//         console.log("INSERT SUCCCESSFUL") 
//     }
// }, 1000)
function joinData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const query = {
                text: `SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1`,
                values: [id]
            };
            const res = yield client.query(query);
            console.log("JOINED DATA is \n", res.rows);
        }
        catch (err) {
            console.error("Error during Joining");
        }
        finally {
            client.end();
        }
    });
}
// insertData('JohnDoe4 ', ' JohnDoe4@gmail.com', 'password123456')
// createUsersTable()
// getData(" johnDoe ")
// updateData("johnDoe@example.com", "password54321")
// deleteData(4)
// joinData(2)
