import React from 'react';
import Image from 'next/image'
import styles from '../../styles/User.module.css';

interface Props {
  imgSrc: string
  name: string
  dropdown?: Function
}

export default function UserTag({ imgSrc, name, dropdown, }: Props): JSX.Element {
  return (
    <div className={styles.tag}>
      <Image
        src={imgSrc}
        alt={`${name}'s portrait`}
        width={22}
        height={21}
      />
      <p className={styles.username}>{name}</p>
      {dropdown && (
        <button
          className={styles.dropdown}
          onClick={(e) => {
            e.preventDefault();
            dropdown();
          }}
        >
          <Image
            src="/images/symbols/dropdown_symbol.svg"
            alt="Dropdown icon"
            width={20}
            height={8}
          />
        </button>
      )}
    </div>
  )
}
