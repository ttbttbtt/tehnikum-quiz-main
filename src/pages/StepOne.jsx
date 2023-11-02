import React from "react";
import { Inditext } from "../components/indiText";
import { Heading } from "../components/heading";
import { Button } from "../components/button";
import { Input2 } from "../components/input2";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">


              {/* <span className="indicator__description">
                Скидка за прохождение опроса:
              </span> */}
              <Inditext
                tag="span"
                clname="indicator__description"
                text="Скидка за прохождение опроса:"
              />


              {/* <span className="indicator__value">15%</span> */}
              <Inditext
                tag="span"
                clname="indicator__value"
                text="15%"
              />


            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">


            {/* <h2>1. Занимательный вопрос</h2> */}
            <Heading 
              text = "1. Занимательный вопрос"
              HeadingType = "h2"
            />


            {/* <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label> */}
            <Input2
              isRequired
              name="answer"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите номер в правильном формате например"
            />


            {/* <button disabled id="next-btn">
              Далее
            </button> */}
            <Button
              isDisabled
              id="next-btn"
              buttonText="Далее"
            />


          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
