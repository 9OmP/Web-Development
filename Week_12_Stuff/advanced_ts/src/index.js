function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
var age = sumOfAge({ name: 'Om', age: 22 }, { name: 'Sus', age: 22 });
console.log(age);
