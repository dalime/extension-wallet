import React from 'react';
import Collectible from './Collectible';

export default function Collectibles(): JSX.Element {
  const collectibles = [
    {
      thumbnail: '/images/backgrounds/collectible_thumbnail.png',
      name: 'Digital Ninja',
      author: 'johndoe.near',
    },
    {
      thumbnail: '/images/backgrounds/collectible_thumbnail.png',
      name: 'Panda',
      author: 'whitegoose497',
    },
    {
      thumbnail: '/images/backgrounds/collectible_thumbnail.png',
      name: 'Digital Ninja',
      author: 'johndoe.near',
    },
  ];

  return collectibles.length ? (
    <>
      {collectibles.map((collectible, index) => {
        const { thumbnail, name, author, } = collectible;

        return (
          <Collectible
            key={index}
            thumbnail={thumbnail}
            name={name}
            author={author}
          />
        );
      })}
    </>
  ) : <></>;
}
