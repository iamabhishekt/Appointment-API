import { v4 as uuidv4 } from "uuid"; // import uuid for different ids


let users = []; // Create empty array for users variable  at start

export const getUsers = (req, res) => {
  // console.log(users); // log users

  res.send(users);
}; // GET request to root

export const createUser = (req, res) => {

  // console.log('POST ROUTE REACHED'); // POST request to root

  // console.log(req.body); // req.body is the data sent from the client


  const user = req.body; // get the data from the client

  users.push({ ...user, id: uuidv4() }); // push the data to the users array (spread all the properties of the user and add the id(spread operator))

  res.send(`User with the name ${user.firstName} added to the database!`);  // Send response with adding name
}; // POST request to root

// /users/id => req.params => { id: 123 }
export const getUser = (req, res) => {
  const { id } = req.params; // get the id from the params

  const foundUser = users.find((user) => user.id === id); // find the user with the id

  res.send(foundUser); // send the found user
}; // GET  request to root with id

export const deleteUser = (req, res) => {
  const { id } = req.params; // get the id from the params

  users = users.filter((user) => user.id !== id); // filter the users array and remove the user with the id (it will return false for user.id !== id)

  res.send(`User with the id ${id} deleted from the database.`); // send the response with the id
}; // DELETE request to root with id

export const updateUser = (req, res) => {
  const { id } = req.params; // get the id from the params

  const { firstName, lastName, age } = req.body; // get the data from the client

  const user = users.find((user) => user.id === id); // find the user with the id

  if (firstName) user.firstName = firstName; // if firstName is true then change the firstName
  if (lastName) user.lastName = lastName; // if lastName is true then change the lastName
  if (age) user.age = age; // if age is true then change the age

  res.send(`User with the id ${id} has been updated.`); // send the response with the id
} // PATCH request to root with id (update) instead of PUT (replace)