import { v4 as uuidv4 } from "uuid"; // import uuid for different ids

let doctors  = []; // Create empty array for users variable  at start

export const getDoctors = (req, res) => {
  // console.log(doctors); // log doctors

  res.send(doctors);
}; // GET request to root


export const createDoctor = (req, res) => {

  // console.log('POST ROUTE REACHED'); // POST request to root

  // console.log(req.body); // req.body is the data sent from the client


  const doctor = req.body; // get the data from the client

  doctors.push({ ...doctor, id: uuidv4() }); // push the data to the doctors array (spread all the properties of the doctor and add the id(spread operator))

  res.send(`doctor with the name ${doctor.firstName} added to the database!`);  // Send response with adding name
}; // POST request to root

export const getDoctor = (req, res) => {
  const { id } = req.params; // get the id from the params

  const foundDoctor = doctors.find((doctor) => doctor.id === id); // find the doctor with the id

  res.send(foundDoctor); // send the found doctor
}; // GET  request to root with id

export const deleteDoctor = (req, res) => {
  const { id } = req.params; // get the id from the params

  doctors = doctors.filter((doctor) => doctor.id !== id); // filter the doctors array and remove the doctor with the id (it will return false for doctor.id !== id)

  res.send(`doctor with the id ${id} deleted from the database.`); // send the response with the id
}; // DELETE request to root with id

export const updateDoctor = (req, res) => {
  const { id } = req.params; // get the id from the params

  const { firstName, lastName, age } = req.body; // get the data from the client

  const doctor = doctors.find((doctor) => doctor.id === id); // find the doctor with the id

  if (firstName) doctor.firstName = firstName; // if firstName is true then change the firstName
  if (lastName) doctor.lastName = lastName; // if lastName is true then change the lastName
  if (age) doctor.age = age; // if age is true then change the age

  res.send(`doctor with the id ${id} has been updated.`); // send the response with the id
} // PATCH request to root with id (update) instead of PUT (replace)