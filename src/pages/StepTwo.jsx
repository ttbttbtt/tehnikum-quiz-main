import React, { 
  // useEffect,
  useState } from "react";
  
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { Heading } from "../components/heading";
import { LinkButton } from "../components/LinkButton";

const StepTwo = () => {
  const [checkedAnswer, setCheckedAnswer] = useState(null)
  // console.log("checkedAnswer2: ", checkedAnswer)

  localStorage.setItem('stepTwoValue', JSON.stringify(checkedAnswer))

  const variants = [
    { id: "variant-1",
      answerLabel: "Ответ №1",
    },
    { id: "variant-2",
      answerLabel: "Ответ №2",
    },
    { id: "variant-3",
      answerLabel: "Ответ №3",
    },
    { id: "variant-4",
      answerLabel: "Ответ №4",
    },
  ]

  // useEffect(() => {
  //   console.log("useEffect: ", checkedAnswer)
  // }, [checkedAnswer])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2}/>

          <div className="question">

            <Heading
              HeadingType='h2'
              text="2. Занимательный вопрос"
            />

            <ul className="variants">
              {/* <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">Ваш ответ</label>
              </li>
              ...
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">Ваш ответ</label>
              </li> */}

              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  answerLabel={elem.answerLabel}
                  // onChange={() => setCheckedAnswer(elem.id)}
                  // isChecked={elem.id === checkedAnswer}
                  onChange={() => setCheckedAnswer(elem.answerLabel)}
                  isChecked={elem.answerLabel === checkedAnswer}
                />
              ))}

            </ul>

            <LinkButton
              path="/step-three"
              isDisabled={!checkedAnswer}
              id="next-btn"
              type="button"
              buttonText="Далее"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;