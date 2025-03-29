import request from "supertest";
import express from "express";
import costDataController from "../../controllers/trends/cost-data";

const app = express();
app.use(express.json());

const route = "/api/costdata";

app.use(route, costDataController);

describe(`GET ${route}`, () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).get(route);
    expect(response.status).toBe(200);
  });
});
