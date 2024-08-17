import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const Button = ({ value }) => {
  const getStyleName = (btn) => {
    const className = {
      "=": "equals",
      "+": "plus",
      "-": "minus",
      "*": "multiply",
      "/": "divide",
      ".": "decimal",
      C: "clear", // Added class for clear button
    };
    return className[btn] || ""; // Return the class name based on the btn value
  };

  const { calc, setCalc } = useContext(CalcContext);

  const handleBtnClick = () => {
    const commaClick = () => {
      const num = calc.num !== undefined ? calc.num.toString() : "";
      setCalc({
        ...calc,
        num: !num.includes(".") ? num + value : num,
      });
    };

    const resetClick = () => {
      setCalc({ sign: "", num: "", res: 0 }); // Initialize num as an empty string
    };

    const handleNumberClick = () => {
      const numberString = value.toString();
      let numberValue;

      if (numberString === "0" && calc.num === "0") {
        numberValue = "0"; // Prevent multiple leading zeros
      } else {
        numberValue = calc.num === "" ? numberString : calc.num + numberString;
      }

      setCalc({
        ...calc,
        num: numberValue,
      });
    };

    const signClick = () => {
      setCalc({
        sign: value,
        res:
          calc.num !== ""
            ? calc.res === 0
              ? Number(calc.num)
              : calc.res
            : calc.res,
        num: "",
      });
    };

    const equalsClick = () => {
      if (calc.res !== null && calc.num !== "" && calc.sign !== "") {
        const calculate = (a, b, sign) => {
          switch (sign) {
            case "+":
              return a + b;
            case "-":
              return a - b;
            case "*":
              return a * b;
            case "/":
              return a / b;
            default:
              return 0;
          }
        };

        setCalc({
          res: calculate(calc.res, Number(calc.num), calc.sign),
          sign: "",
          num: 0,
        });
      }
    };

    const persenClick = () => {
      setCalc({
        num: calc.num / 100,
        res: calc.res / 100,
        sign: "",
      });
    };
    const invertClick = () => {
      setCalc({
        num: calc.num ? calc.num * -1 : 0,
        res: calc.res ? calc.res * -1 : 0,
        sign: "",
      });
    };
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      "*": signClick,
      "+": signClick,
      "-": signClick,
      "=": equalsClick,
      "%": persenClick,
      "+-": invertClick,
    };

    if (results[value]) {
      results[value]();
    } else {
      handleNumberClick(); // Handle number button clicks
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
