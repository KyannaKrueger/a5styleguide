import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <main className={styles.header}>
      <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Colors</Link></li>
            <li><Link href="/">Graphics</Link></li>
            <li><Link href="/">Logo</Link></li>
            <li><Link href="/">Typography</Link></li>
        <li className={styles.homeNav}><button className={styles.navBtns}><Link href="/">Home</Link></button></li>
        <li className={styles.aboutNav}><button className={styles.navBtns}><Link href="/about">About</Link></button></li>
        <li className={styles.contactNav}><button className={styles.navBtns}><Link href="/contact">Contact</Link></button></li>
        </ul>
    </nav>
      </main>
    </>
  );
}