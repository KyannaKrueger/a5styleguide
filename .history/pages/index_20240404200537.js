import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header/>
      <main className={`${styles.main}`}>
       <h1 className={styles.fQ}>FitQuest</h1>
       <h2 className={styles.sG}>Styleguide</h2>
      </main>
      <Footer/>
    </>
  );
}
