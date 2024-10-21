import React from 'react';

interface Props {
  alerts: string[];
}

const AlertDisplay: React.FC<Props> = ({ alerts }) => {
  if (alerts.length === 0) return null;

  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 m-2" role="alert">
      <p className="font-bold">Weather Alerts:</p>
      <ul className="list-disc list-inside">
        {alerts.map((alert, index) => (
          <li key={index}>{alert}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlertDisplay;