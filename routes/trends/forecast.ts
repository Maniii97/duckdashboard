import express from "express";
import forecastController from "../../controllers/trends/forecast";

const router = express.Router();

router.get("/", forecastController);

export default router;