import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";

const StepTwo = () => {
  const [checkedAnswer, setCheckedAnswer] = useState(null)
  console.log("useState: ", checkedAnswer)

  const variants = [
    {
      id: "variant-1",
      answerLabel: "Ответ №1",
    },
    {
      id: "variant-2",
      answerLabel: "Ответ №2",
    },
    {
      id: "variant-3",
      answerLabel: "Ответ №3",
    },
    {
      id: "variant-4",
      answerLabel: "Ответ №4",
    },
  ]

  useEffect(() => {
    console.log("useEffect: ", checkedAnswer)
  }, [checkedAnswer])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">

          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}

          <ProgressBar />

          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <ul className="variants">

              {/* <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">Ваш ответ</label>
              </li> */}

              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  answerLabel={elem.answerLabel}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}

            </ul>
            <button disabled id="next-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
