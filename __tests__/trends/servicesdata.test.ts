import request from "supertest";
import express from "express";
import awsDataController from "../../controllers/trends/aws-services-data";

const app = express();
app.use(express.json());

const route = "/api/awsdata";

app.use(route, awsDataController);

describe(`GET ${route}`, () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).get(route);
    expect(response.status).toBe(200);
  });
});
