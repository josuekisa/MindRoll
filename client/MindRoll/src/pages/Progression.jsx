import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

import { useContext } from "react";
import { sessionContext } from "../components/SessionContext";

const Progression = () => {
  const { list, setList } = useContext(sessionContext);
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>item.note</li>
        ))}
      </ul>
      Progression
    </div>
  );
};

export default Progression;
