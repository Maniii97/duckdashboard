import express from "express";
import costDataController from "../controllers/cost-data";

const router = express.Router();

router.get("/", costDataController);

export default router;
