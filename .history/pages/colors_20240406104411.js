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
                  <img src="/orangeSwatch.png" className={styles.swatch}/>
                  <h4>The Accent</h4>
                  <p>We selected orange as our accent color <br/> because it symbolizes energy, which is<br/> crucial for a fitness app. We opted for this <br/>vibrant shade of orange over other colors<br/> because its brightness distinguishes the app,<br/> serving as a powerful reminder and motivator for daily workouts.You can find this color in our action buttons and to highlight important parts of our app.</p>
              </div>
              <div className={styles.clrSwatch}>
                  <img src="/graySwatch.png" className={styles.swatch}/>
                  <h4>The Grey</h4>
                  <p>This shade of grey is an excellent color choice to compliment out accent color. This color is primarily used for buttons, and stand out against our dark mode background.</p>
              </div>
              <div className={styles.clrSwatch}>
                  <img src="/blackSwatch.png" className={styles.swatch}/>
                  <h4>The Black</h4>
                  <p>Black is our background color for dark mode, and our text color for light mode.</p>    
              </div>
              <div className={styles.clrSwatch}>
                  <img src="/whiteSwatch.png" className={styles.swatch}/>
                  <h4>The White</h4>
                  <p>White is our background color for light mode, and our text color for dark mode.</p>
              </div>
         </div>
        </main>
        <Footer/>
      </>
    );
  }
  