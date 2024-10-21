import React from 'react';
import { WeatherData } from '../types/WeatherTypes';
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning } from 'lucide-react';

interface Props {
  data: WeatherData;
}

const WeatherIcon: React.FC<{ condition: string }> = ({ condition }) => {
  switch (condition.toLowerCase()) {
    case 'clear':
      return <Sun className="w-8 h-8 text-yellow-500" />;
    case 'clouds':
      return <Cloud className="w-8 h-8 text-gray-500" />;
    case 'rain':
      return <CloudRain className="w-8 h-8 text-blue-500" />;
    case 'snow':
      return <CloudSnow className="w-8 h-8 text-blue-200" />;
    case 'thunderstorm':
      return <CloudLightning className="w-8 h-8 text-yellow-600" />;
    default:
      return <Sun className="w-8 h-8 text-yellow-500" />;
  }
};

const WeatherDisplay: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
      <h3 className="text-xl font-semibold mb-2">{data.city}</h3>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold">{data.temp.toFixed(1)}°C</p>
          <p className="text-sm text-gray-600">Feels like: {data.feels_like.toFixed(1)}°C</p>
        </div>
        <div className="flex flex-col items-center">
          <WeatherIcon condition={data.main} />
          <p className="text-sm mt-1">{data.main}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Last updated: {new Date(data.dt * 1000).toLocaleTimeString()}
      </p>
    </div>
  );
};

export default WeatherDisplay;