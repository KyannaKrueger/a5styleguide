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
        <video autoPlay muted loop className={styles.backgroundVideo}>
    <source src="/fitQuestSlideshow.mp4" type="video/mp4" />
  </video>
        <h1 className={styles.fQ}>FitQuest</h1>
        <h2 className={styles.sG}>Styleguide</h2>
      </main>
      <Footer />
    </>
  );
}
