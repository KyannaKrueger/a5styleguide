import Link from 'next/link'; 
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
        <link rel="icon" href="/fQ.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.square}></div>
        <video autoPlay muted loop className={styles.backgroundVideo}>
          <source src="/fitQuestSlideshow.mp4" type="video/mp4" />
        </video> 
        <h1 className={styles.fQ}>Fit<span className={styles.quest}>Quest</span></h1>
        <h2 className={styles.sG}>Styleguide</h2>
        <Link href="/colors" passHref>
          <button className={styles.promptBtn}>Lets go!</button>
        </Link>
      </main>
      <Footer />
    </>
  );
}