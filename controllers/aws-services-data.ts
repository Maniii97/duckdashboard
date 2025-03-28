import { Request, Response } from "express";
import { awsServicesData } from "../utils/dummy-data";

const awsServicesDataController = (req: Request, res: Response) => {
  try {
    const data = awsServicesData;
    const response = {
      status: "success",
      data: data,
    };
    res.status(200).json(response);
  } catch (error) {
    console.log(
      "Error @/controllers/aws-services-data -> awsServicesDataController : " +
        error
    );
    const response = {
      status: "error",
      message: "Server Error",
    };
    res.status(500).json(response);
  }
};

export default awsServicesDataController;
