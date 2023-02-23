import express from 'express';
import userLogin from '../controllers/auth';

const router = express.Router();

router.post("/", userLogin);

export default router;