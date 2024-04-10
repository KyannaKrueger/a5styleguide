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
                  <p>We selected orange as our accent color <br/> because it symbolizes energy, which is<br/> crucial for a fitness app. We opted for this <br/>vibrant shade of orange over other colors<br/> because its brightness distinguishes the app,<br/> serving as a powerful reminder and motivator<br/> for daily workouts. You can find this color<br/> in our action buttons and to highlight<br/> important parts of our app.</p>
              </div>
              <div className={styles.clrSwatch}>
                  <img src="/graySwatch.png" className={styles.swatch}/>
                  <h4>The Grey</h4>
                  <p>This shade of grey is an excellent color choice<br/> to compliment out accent color. This color is primarily<br/> used for buttons, and stand out against our <br/>dark mode background.</p>
              </div>
              <div className={styles.clrSwatchBlack}>
                  <img src="/blackSwatch.png" className={styles.swatch}/>
                  <h4>The False Black</h4>
                  <p>Pure black is a harsh color on the eyes, so we are substituting for a dark grey<br/> for our dark mode background, <br/>and our text color for light mode. Black also serves to<br/> highlight the vibrant orange color and has<br/> a large contrast.</p>    
              </div>
              <div className={styles.clrSwatchWhite}>
                  <img src="/whiteSwatch.png" className={styles.swatch}/>
                  <h4>The White</h4>
                  <p>White is our background color for light mode, <br/>and our text color for dark mode.</p>
              </div>
         </div>
         <h3 className={styles.clrSubOne}>Examples</h3>
         <p className={styles.exDescription}>The following images are examples of where our main colors are used appropriately in the app.</p>
         <div className={styles.clrExamples}>
                <img src="/colorExOne.png" className={styles.colorEx}/>
                <img src="/colorExTwo.png" className={styles.colorEx}/>
                <img src="/colorExThree.png" className={styles.colorEx}/>
          </div>
         <h3 className={styles.clrSubTwo}>Accessibility</h3>
         <p className={styles.acDescription}>The following images are screenshots displaying color contrast results.<br/>NOTE: the orange on white button text font size will be 18pt or bold over 14pt to be more accessible.</p>
         <div className={styles.accessibleContainer}>
          <img src="/accessibleWB.png" className={styles.accessiblePic}/>
          <img src="/accessibleBW.png" className={styles.accessiblePic}/>
          <img src="/accessibleGW.png" className={styles.accessiblePic}/>
          <img src="/accessibleOB.png" className={styles.accessiblePic}/>
          <img src="/accessibleWO.png" className={styles.accessiblePic}/>
          <img src="/accessibleOG.png" className={styles.accessiblePic}/>
         </div>
        </main>
        <Footer/>
      </>
    );
  }
  