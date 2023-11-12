import React, { useState,
                //  useEffect,
                useMemo, useCallback } from "react";

import { InfoContext } from "./infoContext";

export const InfoProvider = ({ children }) => {
  const [infoValueName, setInfoValueName] = useState('');
  const [infoValuePhone, setInfoValuePhone] = useState('');
  const [infoValueOne, setInfoValueOne] = useState('');
  const [infoValueTwo, setInfoValueTwo] = useState('');
  const [infoValueThree, setInfoValueThree] = useState('');
  const [infoValueFour, setInfoValueFour] = useState('');


  // useEffect(() => {
  //   const persistedInfoName = JSON.parse(localStorage.getItem("stepNameValue"));
  //   const persistedInfoPhone = JSON.parse(localStorage.getItem("stepPhoneValue"));
  //   const persistedInfoOne = JSON.parse(localStorage.getItem("stepOneValue"));
  //   const persistedInfoTwo = JSON.parse(localStorage.getItem("stepTwoValue"));
  //   const persistedInfoThree = JSON.parse(localStorage.getItem("stepThreeValue"));
  //   const persistedInfoFour = JSON.parse(localStorage.getItem("stepFourValue"));

  //   if (persistedInfoName) { setInfoValueName(persistedInfoName) }
  //   if (persistedInfoPhone) { setInfoValuePhone(persistedInfoPhone) }
  //   if (persistedInfoOne) { setInfoValueOne(persistedInfoOne) }
  //   if (persistedInfoTwo) { setInfoValueTwo(persistedInfoTwo) }
  //   if (persistedInfoThree) { setInfoValueThree(persistedInfoThree) }
  //   if (persistedInfoFour) { setInfoValueFour(persistedInfoFour) }

  // }, [infoValueName, infoValuePhone, infoValueOne, infoValueTwo, infoValueThree, infoValueFour]);


  const saveInfo = useCallback(() => {
    // setInfoValueName((prevValue) => (JSON.parse(localStorage.getItem("stepNameValue"))));
    // setInfoValuePhone((prevValue) => (JSON.parse(localStorage.getItem("stepPhoneValue"))));
    // setInfoValueOne((prevValue) => (JSON.parse(localStorage.getItem("stepOneValue"))));
    // setInfoValueTwo((prevValue) => (JSON.parse(localStorage.getItem("stepTwoValue"))));
    // setInfoValueThree((prevValue) => (JSON.parse(localStorage.getItem("stepThreeValue"))));
    // setInfoValueFour((prevValue) => (JSON.parse(localStorage.getItem("stepFourValue"))));

    setInfoValueName(JSON.parse(localStorage.getItem("stepNameValue")));
    setInfoValuePhone(JSON.parse(localStorage.getItem("stepPhoneValue")));
    setInfoValueOne(JSON.parse(localStorage.getItem("stepOneValue")));
    setInfoValueTwo(JSON.parse(localStorage.getItem("stepTwoValue")));
    setInfoValueThree(JSON.parse(localStorage.getItem("stepThreeValue")));
    setInfoValueFour(JSON.parse(localStorage.getItem("stepFourValue")));
  }, []);


  const contextValue = useMemo(() => {
    return {
      infoName: infoValueName,
      infoPhone: infoValuePhone,
      infoOne: infoValueOne,
      infoTwo: infoValueTwo,
      infoThree: infoValueThree,
      infoFour: infoValueFour,
      saveInfo,
    };
  }, [infoValueName, infoValuePhone, infoValueOne, infoValueTwo, infoValueThree, infoValueFour, saveInfo]);


  return (
    <InfoContext.Provider value={contextValue}>
      {children}
    </InfoContext.Provider>
  );
};
