import { Request, Response } from "express";
import { apiUsageData } from "../../utils/dummy-data";

const apiUsageController = async (req: Request, res: Response) => {
  try {
    const data = apiUsageData;
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

export default apiUsageController;
