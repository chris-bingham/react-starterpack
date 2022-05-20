import React, { FC, HTMLAttributes } from "react";
import styles from "./Hello.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
  text: string;
}

export const Hello: FC<Props> = ({ text, ...rest }) => {
  return (
    <h1 className={styles.component}>
      <span {...rest}>{text}</span>!!!
    </h1>
  );
};
