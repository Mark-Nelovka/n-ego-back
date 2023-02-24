import express from 'express';
import getNews from '../controllers/getNews';

const router = express.Router();

router.get("/:page", getNews);

export default router;