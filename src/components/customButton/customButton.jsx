import { useTipData } from "../../context/context";

import "./customButton.css";

const CustomButton = () => {
  const [tipData, setTipData] = useTipData();
  return (
    <button
      className="custom__button"
      onClick={() => {
        setTipData({
          ...tipData,
          total: 0,
          tipPercent: 0,
          noPersons: 0,
        });
      }}
    >
      Reset
    </button>
  );
};

export default CustomButton;
