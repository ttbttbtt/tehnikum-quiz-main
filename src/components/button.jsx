import React from "react";

export const Button = ({ buttonType, buttonText, isDisabled, id }) => {
    return (
        <button
            disabled={isDisabled}
            id={id}
            type={ buttonType === "submit" ? "submit" : "button" }
        >
            {buttonText}
        </button>
    )
}