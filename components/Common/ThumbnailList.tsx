import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Common.module.css';

interface Props {
  thumbnails: string[]
}

export default function ThumbnailList({ thumbnails }: Props): JSX.Element {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}>
      {thumbnails.map((thumbnail: string, index: number) => {
        return (
          <Image
            className={styles.thumbnailImage}
            key={index}
            src={thumbnail}
            alt={`Image ${thumbnail}`}
            width={38}
            height={38}
          />
        );
      })}
    </div>
  )
}
