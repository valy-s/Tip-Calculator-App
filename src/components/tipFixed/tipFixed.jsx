import { useTipData } from "../../context/context";

import "./tipFixed.css";

const TipFixed = ({ tipValue }) => {
  const [tipData, setTipData] = useTipData();
  return (
    <div
      className={`tipFixed__container ${
        tipValue === tipData.tipPercent ? "active" : null
      }`}
      onClick={() => setTipData({ ...tipData, tipPercent: tipValue })}
    >
      <p className="tipFixed__value">{`${tipValue}%`}</p>
    </div>
  );
};

export default TipFixed;
