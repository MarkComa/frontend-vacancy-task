import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface MenuButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  menuEl: menuElModel
}

type menuElModel = {
  id: string;
  title: string;
  icon: JSX.Element;
}
