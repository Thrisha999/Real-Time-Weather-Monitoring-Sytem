# Weather Monitoring System

## Overview

This project is a real-time data processing system designed to monitor weather conditions and provide summarized insights using rollups and aggregates. It utilizes mock data to simulate weather conditions for major Indian cities and provides a user-friendly interface to display current weather, daily summaries, and alerts.

## Features

- Real-time weather data display for 6 major Indian cities
- Daily weather summaries including average, maximum, and minimum temperatures
- Dominant weather condition calculation
- Configurable alerting system for extreme temperatures
- Responsive design for various screen sizes

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (for icons)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/weather-monitoring-system.git
   cd weather-monitoring-system
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server:

```
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `dist` directory.

## Design Choices

1. **Mock API**: We've implemented a mock API to simulate real-time weather data. This allows for easy testing and development without relying on external API keys or services.

2. **React with TypeScript**: We chose React with TypeScript for its robust type checking, improved developer experience, and maintainability.

3. **Vite**: Vite was selected as the build tool for its fast development server and optimized production builds.

4. **Tailwind CSS**: Tailwind CSS was used for rapid UI development and consistent styling across components.

5. **Modular Architecture**: The project is structured with separate components for different functionalities (WeatherDisplay, DailySummary, AlertDisplay) to improve code organization and reusability.

6. **Responsive Design**: The UI is designed to be responsive, adapting to different screen sizes for a better user experience on various devices.

7. **Lucide React Icons**: We've used Lucide React for weather condition icons, providing a visually appealing and intuitive representation of weather states.

## Future Improvements

1. Integrate with a real weather API (e.g., OpenWeatherMap) for actual weather data.
2. Implement user authentication to allow for personalized settings.
3. Add more detailed weather information and forecasts.
4. Implement data persistence for historical analysis.
5. Add unit and integration tests for improved reliability.

