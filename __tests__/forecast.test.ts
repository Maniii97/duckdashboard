import request from "supertest";
import express from "express";
import forecastController from "../controllers/forecast";

const app = express();
app.use(express.json());

app.use("/api/forecast", forecastController);

describe("GET /api/forecast", () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).get("/api/forecast");
    expect(response.status).toBe(200);
  });
});
