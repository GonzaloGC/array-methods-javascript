import "../style.css";
import users from "../data/users.js";


// Forma imperativa de hacer n veces una misma tarea
/* const repetir =()=>{
  for (let i = 0; i <= 4; i++) {
    console.log(users[i]);
  }
}
repetir() */

// Forma declarativa de hacer n veces una tarea
  const nameAndEmail = [];

users.forEach((element) => {
  nameAndEmail.push(element.name + ', ' + element.address.street)
});
console.log(nameAndEmail)
