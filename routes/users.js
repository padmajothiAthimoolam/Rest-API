import express from 'express';

import { getUsers, createUser, getUser, updateUser, deleteUser } from './utilities.js'

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
