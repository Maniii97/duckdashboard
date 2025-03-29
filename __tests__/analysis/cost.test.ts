import request from "supertest";
import express from "express";
import costAnalysis from "../../controllers/analysis/cost-analysis";

const app = express();
app.use(express.json());

const route = "/api/analysis/cost";

app.use(route, costAnalysis);

describe(`GET ${route}`, () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).get(route);
    expect(response.status).toBe(200);
  });
});
