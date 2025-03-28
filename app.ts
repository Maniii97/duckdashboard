import express, { Request, Response } from "express";
import connectDB from "./configs/connection";
import { config } from "dotenv";
import cors from "cors";
import apiUsageRoute from "./routes/api-usage";
import awsDataRoute from "./routes/aws-services-data";
import costDataRoute from "./routes/cost-data";
import forecastRoute from "./routes/forecast";

config();
const PORT = process.env.PORT || 3000;
const app = express();

const corsOptions = { origin: "*", optionsSuccessStatus: 200 };
app.use(cors(corsOptions));

app.use(express.json()); // Parse JSON bodies to all routes

//Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! this server was made by express CLI");
});

app.use("/api/usage", apiUsageRoute);
app.use("/api/awsdata", awsDataRoute);
app.use("/api/costdata", costDataRoute);
app.use("/api/forecast", forecastRoute);

// Global Catches
app.all("*", (_req, _res) => {
  _res.status(404).send("Page Not Foundm, Try a valid route");
});

async function startServer() {
  // await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
startServer();

export default app;
