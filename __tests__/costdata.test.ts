import request from "supertest";
import express from "express";
import costDataController from "../controllers/cost-data";

const app = express();
app.use(express.json());

app.use("/api/costdata", costDataController);

describe("GET /api/costdata", () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).get("/api/costdata");
    expect(response.status).toBe(200);
  });
});
