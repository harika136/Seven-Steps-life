import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [selectedStep] = useState(null);

  return (
    <div className="dashboard">
      <h1>{selectedStep ? `WELCOME TO ${selectedStep.toUpperCase()} PAGE` : 'WELCOME TO MY WEBPAGE'}</h1>
    </div>
  );
}

export default Dashboard;
