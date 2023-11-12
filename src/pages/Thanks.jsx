import React, { useContext } from "react";
import { Heading } from "../components/heading";
import { InfoContext } from "../contexts/infoContext";


const Thanks = () => {
  const { infoName, infoPhone, infoOne, infoTwo, infoThree, infoFour, saveInfo } = useContext(InfoContext)
  saveInfo()

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />

          <div><p>Name: { infoName } Phone: { infoPhone }</p></div>
          <div><p>Page1: {infoOne} </p></div>
          <div><p>Page2: {infoTwo} </p></div>
          <div><p>Page3: {infoThree} </p></div>
          <div><p>Page4: {infoFour} </p></div>

          <Heading 
            text = "Спасибо за прохождение опроса!"
            HeadingType = "h1"
          />
          
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button id="get-link">Получить ссылку</button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
