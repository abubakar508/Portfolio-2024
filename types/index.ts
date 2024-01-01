import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title?: string;
    icon?: any;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    containerStyles?: string;
    iconStyles?: string;
    titleStyles?: string;
    btnType?: "button" | "submit";
  }