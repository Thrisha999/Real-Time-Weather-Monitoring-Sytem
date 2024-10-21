import { WeatherData, DailySummary, AlertConfig } from '../types/WeatherTypes';

export const calculateDailySummary = (data: WeatherData[]): DailySummary => {
  const temps = data.map(d => d.temp);
  const conditions = data.map(d => d.main);

  return {
    date: new Date().toLocaleDateString(),
    avgTemp: temps.reduce((a, b) => a + b, 0) / temps.length,
    maxTemp: Math.max(...temps),
    minTemp: Math.min(...temps),
    dominantCondition: mode(conditions),
  };
};

export const checkAlerts = (data: WeatherData, config: AlertConfig): string | null => {
  if (data.temp > config.highTemp) {
    return `High temperature alert in ${data.city}: ${data.temp.toFixed(1)}°C`;
  }
  if (data.temp < config.lowTemp) {
    return `Low temperature alert in ${data.city}: ${data.temp.toFixed(1)}°C`;
  }
  return null;
};

const mode = (arr: string[]): string =>
  Object.values(
    arr.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }
      count[e][0]++;
      return count;
    }, {} as { [key: string]: [number, string] })
  ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];