import React from "react";
import Chart from "chart.js/auto";

import { useContext } from "react";
import { sessionContext } from "../components/SessionContext";

const Progression = () => {
  const { list, setList } = useContext(sessionContext);
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
