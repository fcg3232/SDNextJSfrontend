export function evaluateRisk(data) {
  const { riskscore, status } = data;

  // If riskscore is present and >= 0.7, mark as "Risky"
  if (riskscore !== undefined && riskscore >= 0.7) {
    return {
      status: "Risky",
      reason: "High riskscore",
    };
  }

  // If riskscore is not present and status is "success", mark as "Safe"
  if (!riskscore && status === "success") {
    return {
      status: "Safe",
      reason: "No riskscore, no risk detected in database",
    };
  }

  // Default to safe if no other conditions match
  return {
    status: "Safe",
    reason: "Riskscore less than 70%, assuming safe",
  };
}
