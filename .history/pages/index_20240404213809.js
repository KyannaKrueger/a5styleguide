import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Video from '../components/Video';

export default function Home() {
  return (
    <>
    <Header/>
      <main className={`${styles.main}`}>
        <div className={styles.square}></div>
        <div className="container">
        <Video/>
        <div className="content">
       <h1 className={styles.fQ}>FitQuest</h1>
       <h2 className={styles.sG}>Styleguide</h2>
       <div className="content">
       </div>
       </div>
      </main>
      <Footer/>
    </>
  );
}
