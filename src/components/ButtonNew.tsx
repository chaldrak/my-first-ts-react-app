import React from "react";

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonNew = (props: ButtonProps) => {
  return <button onClick={(e) => props.handleClick(e)}>Click New</button>;
};

export default ButtonNew;
