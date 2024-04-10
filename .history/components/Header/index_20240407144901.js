import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <main className={styles.header}>
  <div className={styles.logoContainer}>
    <Link href="/">
          <a>
            <img src="/fQDarkLogo.svg" className={styles.logo} />
          </a>
        </Link>
  </div>
  <nav className={styles.navBarContainer}>
    <ul className={styles.navBar}>
      <li className={styles.navItem}><Link href="/" className={styles.headLink}>Home</Link></li>
      <li className={styles.navItem}><Link href="/colors" className={styles.headLink}>Colors</Link></li>
      <li className={styles.navItem}><Link href="/graphics" className={styles.headLink}>Graphics</Link></li>
      <li className={styles.navItem}><Link href="/logo" className={styles.headLink}>Logo</Link></li>
      <li className={styles.navItem}><Link href="/typography" className={styles.headLink}>Typography</Link></li>
    </ul>
  </nav>
</main>
    </>
  );
}