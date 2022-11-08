import express from 'express'; // import express
import bodyParser from 'body-parser';  // import body-parser  

import usersRoutes from './routes/users.js'; // import usersRoutes
import patientsRoutes from './routes/patients.js'; // import patientsRoutes
import doctorsRoutes from './routes/doctors.js'; // import doctorsRoutes
import appointmentsRoutes from './routes/appointments.js'; // import appointmentsRoutes

const app = express(); // Create express app
const PORT = 27018; // Port to run the server

app.use(bodyParser.json()); // Use body-parser

app.use('/users', usersRoutes); // Use usersRoutes
app.use('/patients', patientsRoutes); // Use patientsRoutes
app.use('/doctors', doctorsRoutes); // Use doctorsRoutes
app.use('/appointments', appointmentsRoutes); // Use appointmentsRoutes

app.get('/', (req, res) =>  // GET request to root
  res.send('Hello from Homepage.')); // Send response

app.listen(PORT, () => {
    console.log(`Server Running on port http://localhost:${PORT}`);
}); // Start the server

// creating routes for the server


