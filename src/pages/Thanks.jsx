import React from "react";
import { Heading } from "../components/heading";

const Thanks = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />

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
