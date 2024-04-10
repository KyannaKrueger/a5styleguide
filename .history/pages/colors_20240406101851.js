import styles from "@/styles/colors.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Colors() {
    return (
      <>
      <Header/>
        <main className={styles.colors}>
         <h1 className={styles.clrTitle}>Color palette </h1>
         <p className={styles.clrTxt}>The colors for FitQuest were carefully chosen with the app and its users in mind. We wanted to choose meaningful colors that were bright and energetic to encourage our users to workout using our app.</p>
         <div className={styles.swatchContainer}>
              <div className={styles.clrSwatch}>
                  <img src="/orangeSwatch.png"/>
              </div>
              <div className={styles.clrSwatch}>
                  <img src="/graySwatch.png"/>
              </div>
              <div className={styles.clrSwatch}>
                  <img src="/blackSwatch.png"/>    
              </div>
              <div className={styles.clrSwatch}>
                  <img src="/whiteSwatch.png"/>
              </div>
         </div>
        </main>
        <Footer/>
      </>
    );
  }
  