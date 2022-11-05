import { v4 as uuidv4 } from "uuid"; // import uuid for different ids


let patients = []; // Create empty array for users variable  at start

export const getPatients = (req, res) => {
  // console.log(patients); // log patients

  res.send(patients);
}; // GET request to root

export const createPatient = (req, res) => {

  // console.log('POST ROUTE REACHED'); // POST request to root

  // console.log(req.body); // req.body is the data sent from the client


  const patient = req.body; // get the data from the client

  patients.push({ ...patient, id: uuidv4() }); // push the data to the patients array (spread all the properties of the patient and add the id(spread operator))

  res.send(`patient with the name ${patient.firstName} added to the database!`);  // Send response with adding name
}; // POST request to root

export const getPatient = (req, res) => {
  const { id } = req.params; // get the id from the params

  const foundPatient = patients.find((patient) => patient.id === id); // find the patient with the id

  res.send(foundPatient); // send the found patient
}; // GET  request to root with id

export const deletePatient = (req, res) => {
  const { id } = req.params; // get the id from the params

  patients = patients.filter((patient) => patient.id !== id); // filter the patients array and remove the patient with the id (it will return false for patient.id !== id)

  res.send(`patient with the id ${id} deleted from the database.`); // send the response with the id
}; // DELETE request to root with id

export const updatePatient = (req, res) => {
  const { id } = req.params; // get the id from the params

  const { firstName, lastName, age } = req.body; // get the data from the client

  const patient = patients.find((patient) => patient.id === id); // find the patient with the id

  if (firstName) patient.firstName = firstName; // if firstName is true then change the firstName
  if (lastName) patient.lastName = lastName; // if lastName is true then change the lastName
  if (age) patient.age = age; // if age is true then change the age

  res.send(`patient with the id ${id} has been updated.`); // send the response with the id
} // PATCH request to root with id (update) instead of PUT (replace)