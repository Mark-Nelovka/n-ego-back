import userLogin from '../controllers/auth';
import express from 'express';

const router = express.Router();

router.post("/", userLogin);

export default router;