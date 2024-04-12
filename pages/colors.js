import styles from "@/styles/colors.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BootstrapClient from '@/components/BootstrapClient';
import 'bootstrap/dist/css/bootstrap.css';

export default function Colors() {
    return (
      <>
      <Header/>
        <main className={`${styles.colors} container`}>
        <div className={styles.colorPalette}>
          <h1 className={styles.clrTitle}>Color palette </h1>
          <p className={styles.clrTxt}>The colors for FitQuest were carefully chosen with the app and its users in mind. We wanted to choose meaningful colors that were bright and energetic to encourage our users to workout using our app.</p>
        </div>
         <div className={styles.swatchContainer}>
              <div className={styles.clrSwatch}>
                  <img src="/orangeSwatch.png" className={styles.swatch}/>
                  <h4>The Accent</h4>
                  <p>We selected orange as our accent color because it symbolizes energy, which is crucial for a fitness app. We opted for this vibrant shade of orange over other colors because its brightness distinguishes the app, serving as a powerful reminder and motivator for daily workouts. You can find this color in our action buttons and to highlight important parts of our app.</p>
              </div>
              <div className={styles.clrSwatch}>
                  <img src="/graySwatch.png" className={styles.swatch}/>
                  <h4>The Grey</h4>
                  <p>This shade of grey is an excellent color choice to compliment out accent color. This color is primarily used for buttons, and stand out against our dark mode background.</p>
              </div>
              <div className={styles.clrSwatch}>
                  <img src="/subBlackSwatch.png" className={styles.swatch}/>
                  <h4>The False Black</h4>
                  <p>Pure black is a harsh color on the eyes, so we are substituting for a dark grey for our dark mode background, and our text color for light mode. Dark grey also serves to highlight the vibrant orange color and has a large contrast.</p>    
              </div>
              <div className={styles.clrSwatch}>
                  <img src="/whiteSwatch.png" className={styles.swatch}/>
                  <h4>The White</h4>
                  <p>White is our background color for light mode,and our text color for dark mode.</p>
              </div>
         </div>
          <div className={styles.colorPalette}>
            <h3 className={styles.clrSubOne}>Examples</h3>
            <p className={styles.exDescription}>The following images are examples of where our main colors are used appropriately in the app.</p>
            <div className={styles.examplesImage}>
                  <img src="/newClrExOne.png" className={styles.colorEx}/>
                  <img src="/newClrExTwo.png" className={styles.colorEx}/>
                  <img src="/newClrExThree.png" className={styles.colorEx}/>
            </div>
          </div>
            <div className={styles.colorPalette}>
              <h3 className={styles.clrSubTwo}>Accessibility</h3>
              <p className={styles.acDescription}>The following images are screenshots displaying color contrast results.</p>
              <div className={styles.accessibleContainer}>
                <img src="/newWB.png" className={styles.accessiblePic}/>
                <img src="/accessibleGW.png" className={styles.accessiblePic}/>
                <img src="/newOB.png" className={styles.accessiblePic}/>
                <img src="/accessibleOG.png" className={styles.accessiblePic}/>
                <img src="/accessibleWO.png" className={styles.accessiblePic}/>
                <p className={styles.accessibleP}>NOTE: the orange on white button text font size will be 18pt or bold over 14pt to be more accessible.</p>
              </div>
         </div>
        </main>
        <Footer/>
      </>
    );
  }
  