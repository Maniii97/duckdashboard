import request from "supertest";
import express from "express";
import apiUsageController from "../../controllers/trends/api-usage";

const app = express();
app.use(express.json());

const route = "/api/usage";

app.use(route, apiUsageController); 

describe(`GET ${route}`, () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).get(route);
    expect(response.status).toBe(200);
  });
});
