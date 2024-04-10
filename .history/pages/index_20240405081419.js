import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <div className={styles.square}></div>
    
        <h1 className={styles.fQ}>FitQuest</h1>
        <h2 className={styles.sG}>Styleguide</h2>
      </main>
      <Footer />
    </>
  );
}
