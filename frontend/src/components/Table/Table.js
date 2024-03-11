// src/components/table/Table.js
import React from 'react';
import lifeEmotionsData from './lifeEmotionsData'; // Adjust the path as needed
import './Table.css'; // Import your CSS file

function Table() {
  return (
    <div className="table-container">
      <h6>Life Emotions Data</h6>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Stage</th>
            <th>Emotion1</th>
            <th>Emotion2</th>
            <th>Emotion3</th>
            <th>Emotion4</th>
            <th>Percentage1</th>
            <th>Percentage2</th>
            <th>Percentage3</th>
            <th>Percentage4</th>
          </tr>
        </thead>
        <tbody>
          {lifeEmotionsData.map((stageData) => (
            <tr key={stageData.Stage}>
              <td>{stageData.Stage}</td>
              <td>{stageData.Emotion1}</td>
              <td>{stageData.Emotion2}</td>
              <td>{stageData.Emotion3}</td>
              <td>{stageData.Emotion4}</td>
              <td>{stageData.Percentage1}%</td>
              <td>{stageData.Percentage2}%</td>
              <td>{stageData.Percentage3}%</td>
              <td>{stageData.Percentage4}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
