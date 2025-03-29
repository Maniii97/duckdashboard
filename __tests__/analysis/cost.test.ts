import request from "supertest";
import express from "express";
import costAnalysis from "../../controllers/analysis/cost-analysis";

const app = express();
app.use(express.json());

const route = "/api/analysis/cost";
const payload = {
  costData: [
    {
      timestamp: "Mar-16",
      aws: 851,
      gcp: 863,
      azure: 570,
      utilization: 53,
    },
    {
      timestamp: "Mar-17",
      aws: 1180,
      gcp: 773,
      azure: 585,
      utilization: 54,
    },
    {
      timestamp: "Mar-18",
      aws: 1178,
      gcp: 810,
      azure: 504,
      utilization: 54,
    },
  ],
};

app.use(route, costAnalysis);

describe(`POST ${route}`, () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).post(route).send(payload);
    expect(response.status).toBe(200);
  });
});
