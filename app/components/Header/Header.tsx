'use client';
import React from 'react';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); //menuがopenされたらtrue

  const toggleMenu = () => {
    //Menuボタン押されたとき
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open');
  };

  return (
    <div>
      <header>
        <button
          className={`${styles['menu-icon']} ${
            menuOpen ? styles.open : undefined
          }`}
          onClick={toggleMenu}
          //aria-label:音声読み上げ用
          aria-label="メニューを開く"
        >
          {/* 条件式 ? 真の場合 : 偽の場合 */}
          <span className={menuOpen ? styles.open : undefined}></span>
          <span className={menuOpen ? styles.open : undefined}></span>
          <span className={menuOpen ? styles.open : undefined}></span>
          <p className={menuOpen ? styles.open : undefined}>Menu</p>
        </button>
      </header>

      {/* menuOpen=trueの時、メニュードロワーが開く */}
      <nav
        className={`${styles.draweMenu} ${menuOpen ? styles.open : undefined}`}
      >
        <ul>
          <li>
            <a href="/">トップページ</a>
          </li>
          <li>
            <a href="#">Menuuu</a>
          </li>
          <li>
            <a href="#">Menuuu</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
