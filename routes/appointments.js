import express from "express"; // import express


import { getAppointments, createAppointment, getAppointment, deleteAppointment, updateAppointment} from "../controllers/appointments.js"; // import AppointmentsRoutes

const router = express.Router(); // Create express router

// all routes in here are starting with /Appointments
router.get('/', getAppointments); // GET request to root

router.post('/', createAppointment); // POST request to root  

// /Appointments/id => req.params => { id: 123 }
router.get('/:id', getAppointment); // GET request to root with id

router.delete('/:id', deleteAppointment); // DELETE request to root with id

router.patch('/:id', updateAppointment); // PATCH request to root with id (update) instead of PUT (replace)



export default router; // Export the router




