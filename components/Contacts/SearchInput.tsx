import React, { useState } from 'react';
import styles from '../../styles/Contacts.module.css';

export default function SearchInput(): JSX.Element {
  const [searchString, setSearchString] = useState<string>('');

  return (
    <input
      className="searchInput"
      type="search"
      placeholder="Search Contact"
      value={searchString}
      onChange={(e) => setSearchString(e.target.value)}
    />
  )
}
