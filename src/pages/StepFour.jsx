import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { Heading } from "../components/heading";
import { LinkButton } from "../components/LinkButton";

const StepFour = () => {
  const [checkedAnswer, setCheckedAnswer] = useState(null)
  console.log("useState: ", checkedAnswer)

  const variants = [
    { id: "variant-1",
      answerLabel: "1",
    },
    { id: "variant-2",
      answerLabel: "2",
    },
    { id: "variant-3",
      answerLabel: "3",
    },
    { id: "variant-4",
      answerLabel: "4",
    },
    { id: "variant-5",
      answerLabel: "5",
    },
  ]

  useEffect(() => {
    console.log("useEffect: ", checkedAnswer)
  }, [checkedAnswer])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4}/>

          <div className="question">

            <Heading
              HeadingType='h2'
              text="4. Занимательный вопрос"
            />

            <ul className="level-variants">
              {/* <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">1</label>
              </li>
              ...
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-5" />
                <label htmlFor="variant-5">5</label>
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

            <LinkButton
              path="/thanks"
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

export default StepFour;