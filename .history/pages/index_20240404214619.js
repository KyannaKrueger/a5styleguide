// pages/index.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Video from '../components/Video'; // Import the Video component

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <Video /> {/* Render the Video component as the background */}
        <div className={styles.content}>
          <h1 className={styles.fQ}>FitQuest</h1>
          <h2 className={styles.sG}>Styleguide</h2>
        </div>
      </main>
      <Footer />
    </>
  );
}
