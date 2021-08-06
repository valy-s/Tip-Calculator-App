import { useTipData } from "../../context/context";

import "./result.css";

const calculateAmountPerson = ({ total, tipPercent, noPersons }) => {
  return total > 0 && noPersons > 0
    ? ((total + (total * tipPercent) / 100) / noPersons).toFixed(2)
    : 0;
};

const calculateTipAmount = ({ total, tipPercent, noPersons }) => {
  return total > 0 && noPersons > 0
    ? ((total * tipPercent) / 100 / noPersons).toFixed(2)
    : 0;
};

const Result = ({ name }) => {
  const [{ total, tipPercent, noPersons }] = useTipData();
  const value =
    name === "Total"
      ? calculateAmountPerson({ total, tipPercent, noPersons })
      : calculateTipAmount({ total, tipPercent, noPersons });

  return (
    <div className="result__container">
      <div>
        <p className="result__name">{name}</p>
        <p className="result__person"> / person</p>
      </div>
      <p className="result__value">{`$${value}`}</p>
    </div>
  );
};

export default Result;
