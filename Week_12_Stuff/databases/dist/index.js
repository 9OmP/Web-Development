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
    connectionString: "postgresql://neondb_owner:TDnW9m4tAbpU@ep-square-fire-a13hhqvc.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
});
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP    
        );
    `);
        console.log(result);
    });
}
// createTable()
function insertIntoTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const username = 'username1_here';
        const email = 'username1@email.com';
        const password = 'password1_here';
        const result = yield client.query(`
        INSERT INTO users (username, email, password)
        VALUES ( $1, $2, $3 );
    `, [username, email, password]);
        console.log(result);
    });
}
insertIntoTable();
function updateTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        UPDATE users
        SET username = 'new_username_here', email = 'new_username@email.com', password = 'new_password_here' 
        WHERE username = 'username_here' AND email = 'username@email.com' AND password = 'password_here' 
    `);
        console.log(result);
    });
}
// updateTable()
function showTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        SELECT * FROM users 
    `);
        console.log(result.rows);
    });
}
// showTable()
