import React from 'react';
import { DailySummary as DailySummaryType } from '../types/WeatherTypes';

interface Props {
  summary: DailySummaryType;
}

const DailySummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
      <h3 className="text-xl font-semibold mb-2">Daily Summary: {summary.date}</h3>
      <p>Average Temperature: {summary.avgTemp.toFixed(1)}°C</p>
      <p>Maximum Temperature: {summary.maxTemp.toFixed(1)}°C</p>
      <p>Minimum Temperature: {summary.minTemp.toFixed(1)}°C</p>
      <p>Dominant Condition: {summary.dominantCondition}</p>
    </div>
  );
};

export default DailySummary;