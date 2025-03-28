import { Request, Response } from "express";
import { costData } from "../utils/dummy-data";

const costDataController = (req: Request, res: Response) => {
  try {
    const data = costData;
    const response = {
      status: "success",
      data: data,
    };
    res.status(200).json(response);
  } catch (error) {
    console.error(
      "Error @/controllers/cost-data.ts -> costDataController : " + error
    );
    const response = {
      status: "error",
      message: "Server Error",
    };
    res.status(500).json(response);
  }
};

export default costDataController;
