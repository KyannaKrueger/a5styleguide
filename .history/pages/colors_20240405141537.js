import styles from "@/styles/colors.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Colors() {
    return (
      <>
      <Header/>
        <main className={styles.colors}>
         <h1 className={styles.clrTitle}>Color palette </h1>
         <div className={styles.clrContainer}>
            <div className={styles.sqOne}></div>
            <div className={styles.sqTwo}></div>
            <div className={styles.sqThree}></div>
            <div className={styles.sqFour}></div>
         </div>
        </main>
        <Footer/>
      </>
    );
  }
  