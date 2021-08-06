import { useTipData } from "../../context/context";

import "./tipCustom.css";

const TipCustom = () => {
  const [tipData, setTipData] = useTipData();
  return (
    <div
      className="tipCustom__container"
      onChange={(e) =>
        setTipData({ ...tipData, tipPercent: Number(e.target.value) })
      }
    >
      <input
        className="custom__tip__input"
        type="number"
        placeholder="Custom"
      />
    </div>
  );
};

export default TipCustom;
