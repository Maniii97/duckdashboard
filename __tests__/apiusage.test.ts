import request from "supertest";
import express from "express";
import apiUsageController from "../controllers/api-usage";

const app = express();
app.use(express.json());

app.use("/api/usage", apiUsageController); 

describe("GET api/usage", () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).get("/api/usage");
    expect(response.status).toBe(200);
  });
});
