import React, { ReactElement } from "react";
import styles from "./text.module.scss";

type Props = {
  text: string;
};

export const Text = ({ text }: Props): ReactElement => {
  return <p className={styles.text}>{text}</p>;
};
