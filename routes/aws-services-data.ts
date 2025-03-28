import express from "express";
import awsServicesDataController from "../controllers/aws-services-data";

const router = express.Router();

router.get("/", awsServicesDataController);

export default router;
