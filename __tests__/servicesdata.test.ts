import request from "supertest";
import express from "express";
import awsDataController from "../controllers/aws-services-data";

const app = express();
app.use(express.json());

app.use("/api/awsdata", awsDataController);

describe("GET awsdata", () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).get("/api/awsdata");
    expect(response.status).toBe(200);
  });
});
