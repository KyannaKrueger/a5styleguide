import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <div className={styles.square}></div>
        <video autoPlay muted loop className={styles.backgroundVideo}>
    <source src="/fitQuestSlideshow.mp4" type="video/mp4" />
  </video> 
        <h1 className={styles.fQ}>Fit<span className={styles.quest}>Quest</span></h1>
        <h2 className={styles.sG}>Styleguide</h2>
        <button><Link href="/colors" className={styles.headLinkHome}>Lets go!</Link></button>
      </main>
      <Footer />
    </>
  );
}
