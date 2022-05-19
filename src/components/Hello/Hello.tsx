import React, { FC, HTMLAttributes } from "react";
import * as styles from "./Hello.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
    text: string;
}

export const Hello: FC<Props>  = ({text, ...rest}) => {
    return <p className={styles.component}><h1  {...rest}>{text}</h1></p>;
}