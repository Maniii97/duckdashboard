import express from "express";
import costAnalysis from "../../controllers/analysis/cost-analysis";

const router = express.Router();

router.post("/", costAnalysis);

export default router;
