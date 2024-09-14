// function getAnimalData(){
//     fetch("https://fakerapi.it/api/v1/persons")
//         .then(function(response) {
//         console.log(response.json().then(function(final_data){
//             console.log(final_data);
//         }));
//     })
// }

async function getUserData(){
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const final_data = await response.json();
    document.getElementById('user_data').innerHTML = JSON.stringify(final_data);
}