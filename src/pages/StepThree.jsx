import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem2 } from "../components/AnswerItem2";

const StepThree = () => {
  const [checkedAnswer, setCheckedAnswer] = useState(null)
  console.log("useState: ", checkedAnswer)

  const variants = [
    {
      id: "variant-1",
      answerLabel: "variant-1",
      src: "./img/laugh.png",
      alt: "laugh",
      pn: "Ваш ответ 1",
    },
    {
      id: "variant-2",
      answerLabel: "variant-2",
      src: "./img/hearts.png",
      alt: "hearts",
      pn: "Ваш ответ 2",
    },
    {
      id: "variant-3",
      answerLabel: "variant-3",
      src: "./img/smirk.png",
      alt: "smirk",
      pn: "Ваш ответ 3",
    },
    {
      id: "variant-4",
      answerLabel: "variant-4",
      src: "./img/fright.png",
      alt: "fright",
      pn: "Ваш ответ 4",
    },
  ]

  useEffect(() => {
    console.log("useEffect: ", checkedAnswer)
  }, [checkedAnswer])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">

          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description"
                >Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}

          <ProgressBar />

          <div className="question">
            <h2>3. Занимательный вопрос</h2>
            <ul className="emoji-variants">

              {/* <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">
                  <img src="./img/laugh.png" alt="laugh" />
                  <p>Ваш ответ 1</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">
                  <img src="./img/hearts.png" alt="hearts" />
                  <p>Ваш ответ 2</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">
                  <img src="./img/smirk.png" alt="smirk" />
                  <p>Ваш ответ 3</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">
                  <img src="./img/fright.png" alt="fright" />
                  <p>Ваш ответ 4</p>
                </label>
              </li> */}

              {variants.map((elem) => (
                <AnswerItem2
                  key={elem.id}
                  id={elem.id}
                  answerLabel={elem.answerLabel}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                  src={elem.src}
                  alt={elem.alt}
                  pn={elem.pn}
                />
              ))}

            </ul>
            <button disabled id="next-btn">Далее</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree;
