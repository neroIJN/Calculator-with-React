import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const Button = ({ value }) => {
  const getStyleName = btn => {
    const className = {
      '=': 'equals',
      '+': 'plus',
      '-': 'minus',
      '*': 'multiply',
      '/': 'divide',
      '.': 'decimal',
    };
    return className[btn] || ''; // Return the class name based on the btn value
  };

  const { calc, setCalc } = useContext(CalcContext);

  const handleBtnClick = () => {
    const commaClick = () => {
      // Ensure calc.num is defined and a string
      const num = calc.num !== undefined ? calc.num.toString() : '';

      // Update state with the new number
      setCalc({
        ...calc,
        num: !num.includes('.') ? num + value : num,
      });
    };
    
    const resetClick = () => {
      setCalc({ sign:"",num: 0, res:0 });
    }

    const handelClickButton =() =>{
        const numberString = value.toString();

        let numberValue;
        if (numberString === '0' && calc.num === 0) {
          numberValue = "0"
        } else {
          numberValue = Number(calc.num + numberString)
        }

        setCalc({
          ...calc,
          num:numberValue
         })
    }

    const results = {
      '.': commaClick,
      'C' :resetClick
    };

    // Check if the function exists before calling it
    if (results[value]) {
      results[value]();
    } else {
      return handelClickButton()
    }
  };

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>
      {value}
    </button>
  );
};

export default Button;
