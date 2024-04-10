import styles from './footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.rights}>© FitQuest</p>
      </footer>
    </>
  );
}