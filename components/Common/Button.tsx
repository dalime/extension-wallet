import React from 'react'

interface Props {
  text: string
  textColor: string
  backgroundColor: string
  onClick: Function
}

function Button({ text, textColor, backgroundColor, onClick }: Props): JSX.Element {
  return (
    <button
      style={{
        color: textColor,
        backgroundColor: backgroundColor.length ? backgroundColor : 'transparent',
        borderRadius: 6,
        border: 'none',
        padding: 5,
      }}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </button>

  )
}

export default Button