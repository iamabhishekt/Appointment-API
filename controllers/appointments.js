import { v4 as uuidv4 } from "uuid"; // import uuid for different ids
import connectDb from '../utils/connectionDB.js'; // import usersRoutes

let appointments  = []; // Create empty array for users variable  at start

export const getAppointments = (req, res) => {
  // console.log(appointments); // log appointments

  //const appointmentId = req.params.appointmentId;
    const sql = "SELECT * FROM appointment.appointment_list"; // SQL query
    connectDb.query(sql,(err, rs)=>{ // connect to the database
        if(err) throw err; // if error throw error
        res.status(200).json({status:"success",appointment:rs})// send the response
    })
}; // GET request to root


export const createAppointment = (req, res) => { // POST request to root
  // console.log('POST ROUTE REACHED'); // POST request to root
  // console.log(req.body); // req.body is the data sent from the client
  const appointment = req.body; // get the data from the client

  if(appointment != null && appointment != undefined && appointment != []) { // if appointment is not null, undefined or empty
    const sql = `INSERT INTO appointment.appointment_list (appointmentId,patientId,patientName,doctorId,doctorName,appointmentDate,appointmentDuration,appointmentStatus,appointmentType,caseManagerId)VALUES ('${uuidv4()}','${appointment.patientId}','${appointment.patientName}','${appointment.doctorId}','${appointment.doctorName}','${appointment.appointmentDate}','${appointment.appointmentDuration}','${appointment.appointmentStatus}', '${appointment.appointmentType}','${appointment.caseManagerId}');` // SQL query

  //appointments.push({ ...appointment, id: uuidv4() }); // push the data to the appointments array (spread all the properties of the appointment and add the id(spread operator))

  connectDb.query(sql,(err, rs)=>{ // connect to the database
    if(err) throw err;
    res.status(200).json({status:"success",appointment:rs})
})
}
   // Send response with adding name
}; // POST request to root

export const getAppointment = (req, res) => { // GET  request to root with id
  const { id } = req.params; // get the id from the params

  const sql = "SELECT * FROM appointment.appointment_list where appointmentId =(?)"; // SQL query
  connectDb.query(sql,id,(err, rs)=>{ // connect to the database
    if(err) throw err;
    res.status(200).json({status:"success",appointment:rs})
  })

}; // GET  request to root with id


export const deleteAppointment = (req, res) => { // DELETE request to root with id
  const { id } = req.params; // get the id from the params

  appointments = appointments.filter((appointment) => appointment.id !== id); // filter the appointments array and remove the appointment with the id (it will return false for appointment.id !== id)

  const sql = "DELETE FROM appointment.appointment_list where appointmentId =(?)"; // SQL query
  
  connectDb.query(sql,id,(err, rs)=>{ // connect to the database
    if(err) throw err;
    res.status(200).json({status:`appointment with the id ${id} deleted from the database.`,appointment:rs})
  })
  // res.send(`appointment with the id ${id} deleted from the database.`); // send the response with the id
}; // DELETE request to root with id

export const updateAppointment = (req, res) => {
  // const { id } = req.params.id ; // get the id from the params
  const { id } = req.params; // get the id from the params
  const appointment = req.body; // get the data from the client
  const sql = `UPDATE appointment.appointment_list SET patientId = '${appointment.patientId}', patientName = '${appointment.patientName}', doctorId = '${appointment.doctorId}', doctorName = '${appointment.doctorName}', appointmentDate = '${appointment.appointmentDate}', appointmentDuration = '${appointment.appointmentDuration}', appointmentStatus = '${appointment.appointmentStatus}', appointmentType = '${appointment.appointmentType}', caseManagerId = '${appointment.caseManagerId}' WHERE appointmentId = '${id}';`; // SQL query

  connectDb.query(sql,(err, rs)=>{ // connect to the database
    if(err) throw err;
    res.status(200).json({status:`appointment with the id ${id} has been updated.`,appointment:rs})
  })
  // res.send(`appointment with the id ${id} has been updated.`); // send the response with the id
};// PATCH request to root with id (update) instead of PUT (replace); // PUT request to root with id


  // const { firstName, lastName, age } = req.body; // get the data from the client

  // const appointment = appointments.find((appointment) => appointment.id === id); // find the appointment with the id

  // if (firstName) appointment.firstName = firstName; // if firstName is true then change the firstName
  // if (lastName) appointment.lastName = lastName; // if lastName is true then change the lastName
  // if (age) appointment.age = age; // if age is true then change the age