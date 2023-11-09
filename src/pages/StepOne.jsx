import React, {
              // useEffect,
               useState} from "react";
// import { useNavigate } from "react-router-dom"; // способ 2
import { Heading } from "../components/heading";
// import { Button } from "../components/button";
import { Input2 } from "../components/input2";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  // const navigate=useNavigate() // способ 2

  const [answerValue, setAnswerValue] = useState("")
  const [answerError, setAnswerError] = useState(false)

  // useEffect(() => {
  //   if (!answerValue) {
  //     setAnswerError(true)
  //   } else {
  //     setAnswerError(false)
  //   }
  // },[answerValue])

  // способ 2
  // const goToNextPage = () => {
  //   if (answerValue) {
  //     navigate('/step-two') // переход
  //   }
  // }

  const validateName = () => {
    if (!answerValue) {
      setAnswerError(true)
    } else {
      setAnswerError(false)
    }
  }

  const handleNameInput = (value) => {
    setAnswerValue(value)
    validateName()
  }

  const clickHandler = () => {
    validateName()
    // goToNextPage() // способ 2
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1}/>

          <div className="question">

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
              hasError={answerError}
              value={answerValue}
              // onChange={setAnswerValue}
              onChange={(value) => handleNameInput(value)}
              isRequired
              name="answer"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите номер в правильном формате например"
            />

            {/* // способ 2
              <Button
              isDisabled
              id="next-btn"
              buttonText="Далее"
              onClick={clickHandler}
            /> */}

            <LinkButton
              path="/step-two"
              // isDisabled={false}
              isDisabled={!answerValue}
              type="button"
              buttonText="Далее"
              onClick={clickHandler}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;