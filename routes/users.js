import express from "express"; // import express


import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/users.js"; // import usersRoutes

const router = express.Router(); // Create express router

// all routes in here are starting with /users
router.get('/', getUsers); // GET request to root

router.post('/', createUser); // POST request to root  

router.get('/:id', getUser); // GET request to root with id

router.delete('/:id', deleteUser); // DELETE request to root with id

router.patch('/:id', updateUser); // PATCH request to root with id (update) instead of PUT (replace)

export default router; // Export the router




