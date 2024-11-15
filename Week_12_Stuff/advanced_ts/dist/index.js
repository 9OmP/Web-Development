"use strict";
// interface User {
//     id: string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }
const config = {
    endpoint: 'www.api.com/',
    apikey: 'lxcvnvknv',
};
const displayUserProfile = (user) => {
    console.log('Name: ' + user.name);
    console.log('Age: ' + user.age);
};
// type Users = {
//     [key: string]: User
// }
// type Users = Record<string, User>
const users = new Map();
users.set("ascndjvn", {
    id: 'ascndjvn',
    name: 'Om',
    age: 22,
});
users.set("vjdnvdjn", {
    id: 'vjdnvdjn',
    name: 'Sus',
    age: 22,
});
const user = users.get("vjdnvdjn");
const handleExclude = (event) => {
    console.log(`Handling Event: ${event}`);
};
handleExclude('mousemove');
