import React, {
                // useEffect, // fix: вывод ошибки при: нажатии на кнопку - в коммент!
                useState
              } from "react";
import { Heading } from "../components/heading"
import { Button } from "../components/button";
import { Input } from "../components/input";

const Welcome = () => {

  const [nameValue, setNameValue] = useState("")
  const [phoneValue, setPhoneValue] = useState("")
  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)


  // вывод ошибки при: нажатии на кнопку
  const clickHandler = () => {
    if (!nameValue) {
      setNameError(true)
    } else {
      setNameError(false)
    }

    if (!phoneValue) {
      setPhoneError(true)
    } else {
      setPhoneError(false)
    }
  }


  // вывод ошибки при: изменении Имени или Телефона
  // useEffect(() => { // console.log('nameValue:', nameValue)
  //   if (!nameValue) {
  //     setNameError(true)
  //   } else {
  //     setNameError(false)
  //   }
  //   if (!phoneValue) { // console.log('phoneValue:', phoneValue)
  //     setPhoneError(true)
  //   } else {
  //     setPhoneError(false)
  //   }
  // },[nameValue, phoneValue])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">

          <Heading 
            text = "Добро пожаловать в квиз от лучшего учебного центра"
            HeadingType = "h1"
          />

          <form className="welcome__form">

            <Input
                hasError={nameError}
                value={nameValue}
                onChange={setNameValue}
                id="username"
                isRequired
                inputLabel="Ваше имя"
                inputPlaceholder="Ваш ответ"
                errorMessage="Введите ваше имя"
                />
            <Input
                hasError={phoneError}
                value={phoneValue}
                onChange={setPhoneValue}
                id="phone"
                isRequired
                inputLabel="Ваш номер"
                inputPlaceholder="+998 9- --- -- -- "
                errorMessage="Введите номер в правильном формате"
            />

            <Button
              onClick={clickHandler} // вывод ошибки при: нажатии на кнопку
              buttonType="button"
              // buttonText="Далее"
            />

          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
