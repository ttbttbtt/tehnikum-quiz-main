import React from "react";

export const Input2 = ({
    name,
    isRequired,
    inputType,
    inputPlaceholder,
    errorMessage,
    hasError,
    value,
    onChange,
}) => {
    return(
        <label className={`input-wrapper ${hasError && '_error'}`}>
            <input
                required = {isRequired}
                type={inputType ?? "text"}
                name={name}
                placeholder={inputPlaceholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {hasError && <span id="error-message">{errorMessage}</span>}
        </label>
    )
}