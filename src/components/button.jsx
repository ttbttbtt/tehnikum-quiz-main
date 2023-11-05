import React from "react";

export const Button = ({
    buttonType,
    buttonText,
    isDisabled,
    id,
    // onClick, // вывод ошибки при: нажатии на кнопку
}) => {
    return (
        <button
            disabled={isDisabled}
            id={id}
            type={ buttonType === "submit" ? "submit" : "button" }
            // onClick={onClick} // вывод ошибки при: нажатии на кнопку
        >
            {buttonText}
        </button>
    )
}