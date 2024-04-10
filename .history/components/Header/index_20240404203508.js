import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <main className={styles.header}>
      <nav>
        <ul>
            <li><Link href="/" className={styles.headLink}>Home</Link></li>
            <li><Link href="/colors" className={styles.headLink}>Colors</Link></li>
            <li><Link href="/graphics" className={styles.headLink}>Graphics</Link></li>
            <li><Link href="/logo" className={styles.headLink}>Logo</Link></li>
            <li><Link href="/typography" className={styles.headLink}>Typography</Link></li>
        </ul>
    </nav>
      </main>
    </>
  );
}