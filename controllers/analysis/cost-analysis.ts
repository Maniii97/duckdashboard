import { Request, Response } from "express";
import { analyzeCosts } from "../../utils/analysis";

const costAnalysis = async (req: Request, res: Response) => {
  try {
    const data = analyzeCosts;
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

export default costAnalysis;
