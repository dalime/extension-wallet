import React, { CSSProperties } from 'react';
import Image from 'next/image';
import styles from '../styles/Feed.module.css';

interface Props {
  name: string
  textColor: string
  child: JSX.Element
  toSection: Function
  backgroundColor?: string
  backgroundImg?: string
  style?: CSSProperties
}

export default function FeedSection({ name, textColor, child, toSection, backgroundColor, backgroundImg, style }: Props): JSX.Element {
  return (
    <div
      className={styles.feedSection}
      style={{
        ...style,
        backgroundImage: backgroundImg || 'none',
        backgroundColor: backgroundColor || 'transparent',
      }}
    >
      <div className={styles.spaceBetween}>
        <p
          className={styles.sectionLabel}
          style={{ color: textColor, }}
        >
          {name}
        </p>
        <button
          className={styles.button}
          style={{ color: textColor, }}
          onClick={(e) => {
            e.preventDefault();
            toSection();
          }}
        >
          <Image
            src="/images/symbols/chevron_right.svg"
            alt="Home symbol"
            width={5.33}
            height={10}
          />
        </button>
      </div>
      {child}
    </div>
  )
}
