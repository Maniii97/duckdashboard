import request from "supertest";
import express from "express";
import forecastAnalysis from "../../controllers/analysis/forecast-analysis";

const app = express();
app.use(express.json());

const route = "/api/analysis/forecast";
const payload = {
  historicalData: [
    { timestamp: "Mar-16", aws: 851, gcp: 863, azure: 570, utilization: 53 },
  ],
  costData: [
    { timestamp: "Mar-16", aws: 851, gcp: 863, azure: 570, utilization: 53 },
  ],
};

app.use(route, forecastAnalysis);

describe(`POST ${route}`, () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).post(route).send(payload);
    expect(response.status).toBe(200);
  });
});
