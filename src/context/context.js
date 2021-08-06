import { useState, createContext, useContext } from "react";

export const initialTipData = {
  total: 0,
  tipPercent: 0,
  noPersons: 0,
};

export const TipDataContext = createContext();

export const TipDataProvider = (props) => {
  const [tipData, setTipData] = useState(initialTipData);

  return (
    <TipDataContext.Provider value={[tipData, setTipData]}>
      {props.children}
    </TipDataContext.Provider>
  );
};

export const useTipData = () => useContext(TipDataContext);
