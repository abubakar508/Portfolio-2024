import React from "react";

//import types props
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  icon,
  btnType,
  handleClick,
  containerStyles,
  iconStyles,
  titleStyles,
}: CustomButtonProps) => {
  return (
    <button
      className={` bg-primary px-8 hover:bg-primary/70 text-accent dark:bg-accent dark:text-primary dark:hover:bg-accent/70 py-2 text-sm rounded-full ${containerStyles}`}
      onClick={handleClick}
      type={btnType}
    >
      <span className={` ${titleStyles}`}>{title}</span>
      <span className={` ${iconStyles}`}>{icon}</span>
    </button>
  );
};

export default CustomButton;
