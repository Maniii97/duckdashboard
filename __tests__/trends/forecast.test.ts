import request from "supertest";
import express from "express";
import forecastController from "../../controllers/trends/forecast";

const app = express();
app.use(express.json());

const route = "/api/forecast";

app.use(route, forecastController);

describe(`GET ${route}`, () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).get(route);
    expect(response.status).toBe(200);
  });
});