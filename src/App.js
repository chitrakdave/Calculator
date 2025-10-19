import React, { useState } from "react";
import styles from "./App.module.css";
import { Display } from "./components/Display";
import { Buttons } from "./components/Buttons";

export const App = () => {
  const [calculation, setCalculation] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalculation("");
    } else if (buttonName === "=") {
      const result = eval(calculation);
      setCalculation(result);
    } else if (buttonName === "x²") {
      setCalculation(calculation * calculation);
    } else if (buttonName === "√x") {
      setCalculation(Math.sqrt(calculation));
    } else if (buttonName === "⌫") {
      setCalculation((prev) => prev.slice(0, -1));
    } else {
      const newCalculation = calculation + buttonName;
      setCalculation(newCalculation);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className={styles.calculator}>
        <Display calculation={calculation}></Display>

        <Buttons onButtonClick={onButtonClick}></Buttons>
      </div>
    </div>
  );
};
