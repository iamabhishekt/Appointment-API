import express from "express"; // import express


import { getPatients, createPatient, getPatient, deletePatient, updatePatient } from "../controllers/patients.js"; // import PatientsRoutes

const router = express.Router(); // Create express router

// all routes in here are starting with /Patients
router.get('/', getPatients); // GET request to root

router.post('/', createPatient); // POST request to root  

// /Patients/id => req.params => { id: 123 }
router.get('/:id', getPatient); // GET request to root with id

router.delete('/:id', deletePatient); // DELETE request to root with id

router.patch('/:id', updatePatient); // PATCH request to root with id (update) instead of PUT (replace)

export default router; // Export the router




