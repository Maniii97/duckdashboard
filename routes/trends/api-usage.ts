import express from "express";
import apiUsageController from "../../controllers/trends/api-usage";

const router = express.Router();

router.get("/", apiUsageController);

export default router;
