import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PlotGraph.css';

function PlotGraph() {
  const [xData, setXData] = useState('');
  const [yData, setYData] = useState('');
  const [data, setData] = useState([]);

  const handlePlot = () => {
    const xValues = xData.split(',').map(Number);
    const yValues = yData.split(',').map(Number);

    if (xValues.length !== yValues.length) {
      alert('X-axis and Y-axis data must have the same length');
      return;
    }

    const plotData = xValues.map((x, i) => ({ x, y: yValues[i] }));
    setData(plotData);
  };

  return (
    <div className="plot-graph">
      <h1 className="text-center">Plot Graph</h1>
      <div className="mb-3">
        <label className="form-label">Enter X-axis data (comma separated):</label>
        <input type="text" className="form-control" value={xData} onChange={(e) => setXData(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Enter Y-axis data (comma separated):</label>
        <input type="text" className="form-control" value={yData} onChange={(e) => setYData(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handlePlot}>Plot</button>
      
      <div className="chart-container mt-4">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PlotGraph;
