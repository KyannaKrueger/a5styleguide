import styles from "@/styles/typography.module.css";
import Header from "@/components/Header";

export default function Typography() {
    return (
      <>
      <Header/>
        <main className={styles.typography}>
        <h1 className={styles.typoTitle}>Typography</h1>
        <p className={styles.typoText}>hi</p>
        </main>
      </>
    );
  }
  