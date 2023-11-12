import React, {
  // useEffect, // вывод ошибки при: изменении Имени или Телефона
  useState,
  useContext
} from "react";

import { useNavigate } from "react-router-dom";
import { Heading } from "../components/heading";
import { Button } from "../components/button";
// import { LinkButton } from "../components/LinkButton";
import { Input } from "../components/input";
import { ThemeContext, themes } from "../contexts/themeContext";

const Welcome = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  // console.log("nameValue: ", nameValue)
  // console.log("phoneValue: ", phoneValue)

  localStorage.setItem('stepNameValue', JSON.stringify(nameValue))
  localStorage.setItem('stepPhoneValue', JSON.stringify(phoneValue))
  

  const { theme, toggleTheme } = useContext(ThemeContext)

  const goToNextPage = () => {
    if (nameValue && phoneValue) {
      navigate("/step-one"); // переход
    }
  };

  const validateName = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const validatePhone = () => {
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const handleNameInput = (value) => {
    setNameValue(value);
    validateName();
  };

  const handlePhoneInput = (value) => {
    setPhoneValue(value);
    validatePhone();
  };

  // вывод ошибки при: нажатии на кнопку
  const clickHandler = () => {
    validateName();
    validatePhone();
    goToNextPage();
  };

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
    // <div className="container" style={{ backgroud: theme === themes.light && '#000'}}>
    <div className={`container ${theme === themes.dark && '_dark'}`}>
      <div className="wrapper">
        <div className="welcome">

          <button style={{ marginBottom: 16 }} type="button" onClick={toggleTheme}>Переключи тему</button>
          
          <Heading
            text="Добро пожаловать в квиз от лучшего учебного центра"
            HeadingType="h1"
          />

          <form className="welcome__form">

            <Input
              hasError={nameError}
              value={nameValue}
              // onChange={setNameValue}
              onChange={(value) => handleNameInput(value)}
              id="username"
              isRequired
              inputLabel="Ваше имя"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваше имя"
            />

            <Input
              hasError={phoneError}
              value={phoneValue}
              // onChange={setPhoneValue}
              onChange={(value) => handlePhoneInput(value)}
              id="phone"
              isRequired
              inputLabel="Ваш номер"
              inputPlaceholder="+998 9- --- -- -- "
              errorMessage="Введите номер в правильном формате"
            />

            <Button
              onClick={clickHandler} // вывод ошибки при: нажатии на кнопку
              buttonType="button"
              buttonText="Далее"
              isDisabled={!nameValue || !phoneValue}
            />

            {/* <LinkButton
              path="/step-one"
              // isDisabled={false}
              isDisabled={!nameValue || !phoneValue}
              type="button"
              buttonText="Далее"
              onClick={clickHandler}
            /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
