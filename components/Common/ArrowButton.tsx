import React, { CSSProperties } from 'react';
import Image from 'next/image';
import styles from '../../styles/Common.module.css';

interface Props {
  text: string
  textColor: string
  textStyle?: CSSProperties
  backgroundColor: string
  action: Function
}

export default function ArrowButton({ text, textColor, textStyle, backgroundColor, action, }: Props): JSX.Element {
  return (
    <button
      className={styles.arrowButton}
      style={{
        ...textStyle,
        background: backgroundColor,
        border: 'none',
        borderRadius: 10,
        color: textColor,
        padding: 10,
      }}
      onClick={(e) => {
        e.preventDefault();
        action();
      }}
    >
      {text}
      <Image
        src="/images/symbols/chevron_right.svg"
        alt="Chevron right"
        width={15}
        height={15}
        color={textColor}
        className={styles.chevronIcon}
      />
    </button>
  )
}
