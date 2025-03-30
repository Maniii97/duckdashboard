import request from "supertest";
import express from "express";
import chatController from "../../controllers/chat/chat";

const app = express();
app.use(express.json());

const route = "/api/chat";
const payload = {
    question: "What is 2+2 = ?",
};

app.use(route, chatController);

describe(`POST ${route}`, () => {
  it("should return api usage data with status 200", async () => {
    const response = await request(app).post(route).send(payload);
    expect(response.status).toBe(200);
  });
});
