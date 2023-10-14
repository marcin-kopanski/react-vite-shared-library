import { FC } from "react";
import styles from "./styles.module.css";

export const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { className, ...restProps } = props
  return <button className={`${className} ${styles.button}`} {...restProps} />;
};
