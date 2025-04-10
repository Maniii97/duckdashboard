import { addDays, format } from "date-fns";
import { CostData, APIUsage, AWSServiceData } from "../types";

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Generate mock cost data for the last 15 days
const costData = (): CostData[] => {
  return Array.from({ length: 15 }).map((_, i) => ({
    timestamp: format(addDays(new Date(), -14 + i), "MMM-dd"),
    aws: random(800, 1200),
    gcp: random(600, 900),
    azure: random(400, 700),
    utilization: random(50, 60),
  }));
};

// Generate mock AWS services data for the last 15 days
const awsServicesData = (): AWSServiceData[] => {
  return Array.from({ length: 15 }).map((_, i) => ({
    timestamp: format(addDays(new Date(), -14 + i), "MMM-dd"),
    ec2: random(400, 600),
    s3: random(100, 200),
    lambda: random(150, 250),
    rds: random(150, 250),
    utilization: random(60, 95),
  }));
};

// Generate mock forecast data for the next 7 days
const forecastData = (): CostData[] => {
  return Array.from({ length: 7 }).map((_, i) => ({
    timestamp: format(addDays(new Date(), i + 1), "MMM-dd"),
    aws: random(900, 1400),
    gcp: random(700, 1000),
    azure: random(500, 800),
    utilization: random(60, 90),
  }));
};

// Generate mock API usage data
const apiUsageData: APIUsage[] = [
  {
    team: "Frontend",
    endpoint: "/api/users",
    calls: 15000,
    latency: 120,
    cost: 150,
  },
  {
    team: "Backend",
    endpoint: "/api/orders",
    calls: 25000,
    latency: 200,
    cost: 250,
  },
  {
    team: "Data Science",
    endpoint: "/api/analytics",
    calls: 5000,
    latency: 500,
    cost: 300,
  },
  {
    team: "Mobile",
    endpoint: "/api/products",
    calls: 20000,
    latency: 150,
    cost: 200,
  },
  {
    team: "DevOps",
    endpoint: "/api/metrics",
    calls: 10000,
    latency: 100,
    cost: 100,
  },
];

export { costData, awsServicesData, forecastData, apiUsageData };
