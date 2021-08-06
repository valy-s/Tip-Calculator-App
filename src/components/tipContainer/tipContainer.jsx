import "./tipContainer.css";
import TipFixed from "../tipFixed/tipFixed";
import TipCustom from "../tipCustom/tipCustom";

const TipContainer = () => {
  return (
    <div className="tip__container">
      <p className="tip__title">Select Tip %</p>
      <div className="tipValues__container">
        <TipFixed tipValue={10} />
        <TipFixed tipValue={15} />
        <TipFixed tipValue={20} />
        <TipFixed tipValue={25} />
        <TipFixed tipValue={50} />
        <TipCustom />
      </div>
    </div>
  );
};

export default TipContainer;
