import express from "express";
import forecastController from "../controllers/forecast";

const router = express.Router();

router.get("/", forecastController);

export default router;