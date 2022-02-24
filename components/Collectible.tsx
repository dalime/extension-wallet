import React from 'react'
import Image from 'next/image';

interface Props {
  thumbnail: string
  name: string
  author: string
}

export default function Collectible({ thumbnail, name, author }: Props): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        margin: 15,
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div>
        <Image
          src={thumbnail}
          alt={name}
          width={60}
          height={60}
        />
      </div>
      <div>
        <p
          style={{
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 14,
            lineHeight: 19,
            textAlign: 'center',
            color: '#000000',
            marginLeft: 13,
          }}
        >
          {name}
          &nbsp;
          <span style={{
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 19,
            textAlign: 'center',
          }}>
            by{' '}
            <a style={{ color: 'purple', }}>
              {author}
            </a>
          </span>
        </p>
      </div>
      <button
        style={{
          background: 'transparent',
          border: 'none',
          color: '#6F6E73',
          justifySelf: 'flex-end',
          marginLeft: 'auto',
          marginRight: 30,
        }}
      >
        <Image
          src='/images/symbols/chevron_right.svg'
          alt="Chevron right"
          width={15}
          height={15}
        />
      </button>
    </div>
  )
}
