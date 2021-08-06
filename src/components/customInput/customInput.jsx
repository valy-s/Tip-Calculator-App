import { useTipData } from "../../context/context";
import "./customInput.css";

const CustomInput = ({ title, icon }) => {
  const [tipData, setTipData] = useTipData();
  const handleChange = (e) => {
    if (title === "Bill") {
      setTipData({ ...tipData, total: Number(e.target.value) });
    } else {
      setTipData({ ...tipData, noPersons: Number(e.target.value) });
    }
  };
  const value = title === "Bill" ? tipData.total : tipData.noPersons;
  return (
    <div className="custom__input__container">
      <p className="input__title">{title}</p>
      <div className="input__container">
        <img className="input__icon" src={icon} alt="input-icon" />
        <input
          className="custom__input"
          type="number"
          value={value}
          onChange={handleChange}
          min={0}
        />
      </div>
    </div>
  );
};

export default CustomInput;
