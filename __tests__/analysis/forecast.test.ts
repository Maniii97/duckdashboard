import request from "supertest";
import express from "express";
import forecastAnalysis from "../../controllers/analysis/forecast-analysis";

const app = express();
app.use(express.json());

const route = "/api/analysis/forecast";

app.use(route, forecastAnalysis); 

describe(`GET ${route}`, () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).get(route);
    expect(response.status).toBe(200);
  });
});
