import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <main className={styles.header}>
      <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="colors.js">Colors</a></li>
            <li><a href="graphics.js">Graphics</a></li>
            <li><a href="typography.js">Typography</a></li>
            <li><a href="logo.js">Logo</a></li>
        </ul>
    </nav>
      </main>
    </>
  );
}