import { CostData } from "../types";
import { CostAnalysis, ForecastAnalysis } from "../types";

const analyzeCosts = (data: CostData[]): CostAnalysis => {
  const totalCosts = data.reduce(
    (acc, curr) => acc + curr.aws + curr.gcp + curr.azure,
    0
  );
  const avgUtilization =
    data.reduce((acc, curr) => acc + curr.utilization, 0) / data.length;

  const providers = {
    AWS: data.reduce((acc, curr) => acc + curr.aws, 0),
    GCP: data.reduce((acc, curr) => acc + curr.gcp, 0),
    Azure: data.reduce((acc, curr) => acc + curr.azure, 0),
  };

  const highestProvider = Object.entries(providers).sort(
    (a, b) => b[1] - a[1]
  )[0];

  const anomalies = data.filter((point) => {
    const totalCost = point.aws + point.gcp + point.azure;
    return point.utilization < 70 && totalCost > 2000;
  });

  const recommendations = [];
  if (avgUtilization < 70) {
    recommendations.push(
      "Consider downsizing instances due to low utilization"
    );
  }
  if (highestProvider[1] > totalCosts * 0.6) {
    recommendations.push(
      `High dependency on ${highestProvider[0]} (${Math.round(
        (highestProvider[1] / totalCosts) * 100
      )}% of costs). Consider multi-cloud strategy`
    );
  }

  return {
    totalCosts,
    avgUtilization,
    highestProvider,
    anomalies,
    recommendations,
  };
};

const analyzeForecast = (
  historicalData: CostData[],
  forecastData: CostData[]
): ForecastAnalysis => {
  const predictedCosts = forecastData.reduce(
    (acc, curr) => acc + curr.aws + curr.gcp + curr.azure,
    0
  );

  // Analyze utilization trend
  const utilizationDiff = historicalData
    .slice(-3)
    .reduce((acc, curr, idx, arr) => {
      if (idx === 0) return 0;
      return acc + (curr.utilization - arr[idx - 1].utilization);
    }, 0);

  const utilizationTrend =
    utilizationDiff > 5
      ? "increasing"
      : utilizationDiff < -5
      ? "decreasing"
      : "stable";

  // Calculate recommended instances based on utilization patterns
  const avgUtilization =
    historicalData.reduce((acc, curr) => acc + curr.utilization, 0) /
    historicalData.length;
  const peakHours = historicalData.filter(
    (d) => d.utilization > avgUtilization
  ).length;

  const recommendedInstances = Object.entries({
    AWS: historicalData.reduce((acc, curr) => acc + curr.aws, 0),
    GCP: historicalData.reduce((acc, curr) => acc + curr.gcp, 0),
    Azure: historicalData.reduce((acc, curr) => acc + curr.azure, 0),
  }).map(([provider, cost]) => {
    const recommendedCount = Math.ceil((cost / 1000) * (avgUtilization / 100));
    return {
      provider,
      count: recommendedCount,
      duration: peakHours,
      potentialSavings: cost * 0.4, // 40% savings on reserved instances
    };
  });

  const recommendations = [
    utilizationTrend === "increasing"
      ? "Consider reserved instances due to increasing utilization trend"
      : "Monitor utilization before committing to long-term reservations",
    `Peak utilization occurs for ${peakHours} hours - optimize scheduling`,
  ];

  return {
    predictedCosts,
    recommendedInstances,
    utilizationTrend,
    recommendations,
  };
};

export { analyzeCosts, analyzeForecast };