import { Request, Response } from "express";
import { forecastData } from "../utils/dummy-data";

const forecastController = (req: Request, res: Response) => {
  try {
    const data = forecastData;
    const response = {
      status: "success",
      data: data,
    };
    return res.status(200).json(response);
  } catch (error) {
    console.log("Error @/controllers/forecast.ts -> forecastController", error);
    const response = {
      status: "error",
      message: "Error occurred while fetching forecast data",
    };
    return res.status(500).json(response);
  }
};

export default forecastController;
