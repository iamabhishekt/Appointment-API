import express from "express"; // import express


import { getDoctors, createDoctor, getDoctor, deleteDoctor, updateDoctor } from "../controllers/doctors.js"; // import DoctorsRoutes

const router = express.Router(); // Create express router

// all routes in here are starting with /Doctors
router.get('/', getDoctors); // GET request to root

router.post('/', createDoctor); // POST request to root  

// /Doctors/id => req.params => { id: 123 }
router.get('/:id', getDoctor); // GET request to root with id

router.delete('/:id', deleteDoctor); // DELETE request to root with id

router.patch('/:id', updateDoctor); // PATCH request to root with id (update) instead of PUT (replace)

export default router; // Export the router




