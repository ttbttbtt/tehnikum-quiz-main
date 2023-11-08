import React from "react";

export const AnswerItem2 = ({ id, answerLabel, isChecked, onChange, src, alt, pn}) => {
  return (
    <li className="variant-wrapper">
      <input
        onChange={onChange}
        checked={isChecked}
        required
        type="radio"
        name="variant"
        id={id}
      />
      <label htmlFor={answerLabel}>
        <img src={src} alt={alt} />
        <p>{pn}</p>
      </label>
    </li>
  )
}