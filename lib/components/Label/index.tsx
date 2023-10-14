import { FC } from "react";
import styles from "./styles.module.css";

export const Label: FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (
  props
) => {
  const { className, ...restProps } = props;
  return <label className={`${className} ${styles.label}`} {...restProps} />;
};
