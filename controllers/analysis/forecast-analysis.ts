import { Request, Response } from "express";
import { analyzeForecast } from "../../utils/analysis";

const forecastAnalysis = async (req: Request, res: Response) => {
  try {
    const data = analyzeForecast;
    const response = {
      status: "success",
      data: data,
    };
    res.status(200).json(response);
  } catch (error) {
    console.error(
      "Error @/controllers/trends/api-usage.ts -> apiUsageController : " + error
    );
    const response = {
      status: "error",
      message: "Server Error",
    };
    res.status(500).json(response);
  }
};

export default forecastAnalysis;
