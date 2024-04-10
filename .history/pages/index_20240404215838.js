import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Video from '../components/Video'; 
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <div className={styles.square}></div>
        <Video />
        <h1 className={styles.fQ}>FitQuest</h1>
        <h2 className={styles.sG}>Styleguide</h2>
      </main>
      <Footer />
    </>
  );
}
