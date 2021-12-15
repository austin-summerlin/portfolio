import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.css';

export default function Header() {
  return (
    <header className={style.Header}>
      <nav>
        <Link to="/">[S]</Link>
      </nav>
    </header>
  );
}
