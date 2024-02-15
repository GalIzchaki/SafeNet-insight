import React from "react";
import { Pie } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import styles from "../styles/Analyze.module.css";

const CakeGraph = () => {
  const data = {
    labels: [
      "Sharing personal information online",
      "Update password and privacy settings",
      "Dealing with cyberbullying",
      "Identify inappropriate content online",
      "Reliability of content on the internet",
      "Creating a Safe Environment",
      "Navigating Conflict Resolution",
    ],
    datasets: [
      {
        data: [12, 15, 8, 2, 15, 45, 3], 
        backgroundColor: [
          "#2E97A7",
          "#1AACAC",
          "#362FD9",
          "#7360DF",
          "#C499F3",
          "#E6A4B4",
          "#F2AFEF",
        ],
        hoverBackgroundColor: [
          "#2E97A7",
            "#1AACAC",
            "#362FD9",
            "#7360DF",
            "#C499F3",
            "#E6A4B4",
            "#F2AFEF",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right", 
        labels: {
          color: "#ffffff",
          boxWidth: 20,
          width: 500,
          padding: 20,
          font: {
            size: 9,
          },
        },
      },
      datalabels: {
        color: "#ffffff",
        font: {
          size: 14,
        },
      },
    },
  };

 return (
    <div style={{display:"flex", justifyContent: "center",height:"500px", color: "#ffffff" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default CakeGraph;