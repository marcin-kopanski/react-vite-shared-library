import { FC } from "react";
import styles from "./styles.module.css";

export const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const { className, ...restProps } = props
  return <input className={`${className} ${styles.input}`} {...restProps} />;
};
