import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './PieCharts.css';
import lifeEmotionsData from './lifeEmotionsData';

const PieCharts = () => {
  useEffect(() => {
    return () => {
      if (window.Chart) {
        window.Chart.helpers.each(window.Chart.instances, (instance) => {
          instance.destroy();
        });
      }
    };
  }, []);

  const handleChartClick = (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      const chart = elements[0]._chart;

      if (chart && chart.data) {
        const dataset = chart.data.datasets[0];
        dataset._meta[0].data.forEach((element, i) => {
          element._model.outerRadius = element._model.innerRadius = 0;
        });
        chart.getDatasetMeta(0).data[index].transition(500).model.outerRadius = 10;
        chart.update();
      }
    }
  };

  return (
    <div>
      <center>
        <h3>Life Emotions - Pie Charts</h3>
      </center>
      <div className="pie-chart-container">
        {lifeEmotionsData.map((stage, index) => (
          <div key={index} className="pie-chart">
            <h2>{stage.Stage}</h2>
            <Pie
              data={{
                labels: [stage.Emotion1, stage.Emotion2, stage.Emotion3, stage.Emotion4],
                datasets: [{
                  data: [
                    stage.Percentage1,
                    stage.Percentage2,
                    stage.Percentage3,
                    stage.Percentage4,
                  ],
                  backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0', '#FFCE56'],
                  hoverBackgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0', '#FFCE56'],
                }],
              }}
              options={{
                onClick: handleChartClick,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieCharts;
