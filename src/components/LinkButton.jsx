import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";

export const LinkButton = ({
  path,
  ...props

}) => {
  return (
    <Link to={path}>
      <Button {...props} />
    </Link>
  )
}