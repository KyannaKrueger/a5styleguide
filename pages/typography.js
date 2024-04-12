import 'bootstrap/dist/css/bootstrap.css';
import styles from "@/styles/typography.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from 'next/head';

export default function Typography() {
    return (
      <>
      <Head>
        <title>Your Page Title</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      </Head>
      <Header/>
        <main className={`${styles.typography} container`}>
        <div className={styles.typoContainer}>
        <h1 className={styles.typoTitle}>Typography</h1>
        <p className={styles.typoText}>San Francisco Pro is an Apple-designed typeface that provides a consistent, legible, and friendly typographic voice.

              Choosing the SF Pro typography for our fitness app font offers plenty advantages. First, the size-specific outlines and dynamic tracking guarantee optimal legibility across various screen resolutions, crucial for displaying detailed fitness data and time-related information.

              SF Pro also offers <span className={styles.orange}>nine weights</span>, including italics, and features like small caps and fractions that provide precision typesetting capabilities, ideal for presenting different information.

            Another reason why we chose this font is because  <span className={styles.orange}>SF Pro supports for over 150 languages</span> across various scripts ensures inclusivity for a diverse user base.</p>
        </div>
        <h1 className={styles.bigSF}>SF Pro</h1>
          <div className={styles.mainExContainer}>
              <h3 className={styles.characterH}>Example Characters:</h3>
              <div className={styles.characterExamples}>
                <h4 className={styles.characters}>Regular</h4>
                <p className={styles.characters}>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqristuvwxyz<br/>1234567890</p>
              </div>
          </div>
          <div className={styles.fontSize}>
        <h3 className={styles.headingH}>Heading sizes:</h3>
        <p className={styles.hOne}>SF Pro Bold 38px</p>
        <p className={styles.hTwo}>SF Pro Bold 32px</p>
       
        <div className={styles.subContainer}>
          <div className={styles.subConOne}>
            <h3 className={styles.sec}>Section head</h3>
            <p className={styles.secH}>SF Pro Bold 24px</p>
          </div>
          <div className={styles.subCon}>
            <h3 className={styles.secSub}>Sub-section head</h3>
            <p className={styles.sub1}>SF Pro Bold 18px</p>
            <p className={styles.sub2}>SF Pro Semi-bold 16px</p>
          </div>
          <div className={styles.bodyContainer}>
            <h3 className={styles.bodyCopy}>Body copy</h3>
            <p className={styles.bodyOne}>SF Pro Regular 16px</p>
            <p className={styles.bodyTwo}>SF Pro Regular 14px</p>
          </div>
          </div>
        </div>
        </main>
        <Footer/>
      </>
    );
  }
  