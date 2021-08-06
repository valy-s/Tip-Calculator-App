import DollarIcon from "./assets/icon-dollar.svg";
import PersonIcon from "./assets/icon-person.svg";
import CustomInput from "./components/customInput/customInput";
import TipContainer from "./components/tipContainer/tipContainer";
import CustomButton from "./components/customButton/customButton";
import Result from "./components/result/result";

function App() {
  return (
    <div className="container">
      <div className="app__title">
        <p>SPLI</p>
        <p>TTER</p>
      </div>
      <div className="app__body">
        <div className="app__values">
          <CustomInput title={"Bill"} icon={DollarIcon} />
          <TipContainer />
          <CustomInput title={"Number of Pepole"} icon={PersonIcon} />
        </div>
        <div className="app__results">
          <Result name={"Tip amount"} />
          <Result name={"Total"} />
          <CustomButton />
        </div>
      </div>
    </div>
  );
}

export default App;
