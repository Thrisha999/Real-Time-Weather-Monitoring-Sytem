import { WeatherData } from '../types/WeatherTypes';

const CITIES = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];

// Mock weather data generator
const generateMockWeatherData = (city: string): WeatherData => {
  const conditions = ['Clear', 'Clouds', 'Rain', 'Snow', 'Thunderstorm'];
  return {
    city,
    main: conditions[Math.floor(Math.random() * conditions.length)],
    temp: Math.random() * 30 + 10, // Random temperature between 10°C and 40°C
    feels_like: Math.random() * 30 + 10,
    dt: Date.now() / 1000, // Current timestamp in seconds
  };
};

export const fetchWeatherData = async (): Promise<WeatherData[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return CITIES.map(city => generateMockWeatherData(city));
};