import '../style.css'
import users from '../data/users.js' 


// users.map(data=> 
// console.log(data.name + ", " + data.address.street)
// )


const newWebsite = users.map(username => {
  return{
    ...username,
    website: 'youprogram.com',
    age: 35
  }
})

// console.log(newWebsite)

const newAge = newWebsite.map(user => ({
  ...users,
  age: user.age + 5
}))

console.log(newAge)