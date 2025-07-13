import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { data } from "react-router-dom";

const BarChart = () => {
  const [chart, setChart] = useState({
    labels: [],
    datasets: [
      {
        label: "Notes",
        data: [],
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  });
  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = () => {
    axios
      .get("http://localhost:3000/sessions")
      .then((res) => {
        const rawData = res.data;
        const labels = rawData.map((item) => item.type);
        const data = rawData.map((item) => Number(item.note));
        console.log("labels", labels);
        console.log("data", data);

        setChart({
          labels,
          datasets: [
            {
              label: "Note par type",
              data,
              backgroundColor: "rgba(255,99,132,1)",
            },
          ],
        });
      })
      .catch((err) => console.log("Erreur get:", err));
  };

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chart}
        options={{
          plugins: {
            title: {
              display: true,
              text: "note par type",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
