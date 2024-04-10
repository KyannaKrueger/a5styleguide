import 'bootstrap/dist/css/bootstrap.css';
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BootstrapClient from '@/components/BootstrapClient';
import Link from "next/link";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>FitQuest Styleguide</title>
        <meta name="description" content="FitQuest Styleguide - BCIT Design 2 Group Project (Set G)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.square}>
          <video className={styles.bgVideoContainer} autoPlay muted loop >
            <source className={styles.cover} src="/fitQuestSlideshow.mp4" type="video/mp4" />
          </video> 
        </div>
        <h1 className={styles.fQ}>Fit<span className={styles.quest}>Quest</span></h1>
        <h2 className={styles.sG}>Styleguide</h2>
        <Link href="/colors" passHref>
          <button className={styles.promptBtn}>Lets go!</button>
        </Link>
      </main>
      <BootstrapClient />
      <Footer />
    </>
  );
}
