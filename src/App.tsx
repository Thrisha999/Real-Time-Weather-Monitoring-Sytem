import React, { useState, useEffect, useCallback } from 'react';
import { fetchWeatherData } from './utils/api';
import { calculateDailySummary, checkAlerts } from './utils/dataProcessing';
import { WeatherData, DailySummary, AlertConfig } from './types/WeatherTypes';
import WeatherDisplay from './components/WeatherDisplay';
import DailySummaryComponent from './components/DailySummary';
import AlertDisplay from './components/AlertDisplay';

const FETCH_INTERVAL = 5 * 60 * 1000; // 5 minutes

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [dailySummary, setDailySummary] = useState<DailySummary | null>(null);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const alertConfig: AlertConfig = {
    highTemp: 35,
    lowTemp: 10,
  };

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchWeatherData();
      setWeatherData(data);
      setError(null);

      // Calculate daily summary
      const summary = calculateDailySummary(data);
      setDailySummary(summary);

      // Check for alerts
      const newAlerts = data
        .map(cityData => checkAlerts(cityData, alertConfig))
        .filter((alert): alert is string => alert !== null);
      setAlerts(newAlerts);
    } catch (err) {
      setError('Error fetching weather data. Please try again later.');
    }
  }, [alertConfig]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, FETCH_INTERVAL);

    return () => clearInterval(interval);
  }, [fetchData]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Weather Monitoring System</h1>
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}
      <AlertDisplay alerts={alerts} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {weatherData.map(data => (
          <WeatherDisplay key={data.city} data={data} />
        ))}
      </div>
      {dailySummary && <DailySummaryComponent summary={dailySummary} />}
    </div>
  );
};

export default App;