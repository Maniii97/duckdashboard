import express from "express";
import forecastAnalysis from "../../controllers/analysis/forecast-analysis";

const router = express.Router();

router.get("/", forecastAnalysis);

export default router;
