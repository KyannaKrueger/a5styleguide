import styles from "@/styles/logo.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Logo() {
    return (
      <>
      <Header/>
        <main className={styles.logoPage}>
            <h1 className={styles.logoH}>Logo</h1>
            <p className={styles.logoDescription}>The FitQuest logo features a badge shape with a striking fire icon at its center, symbolizing our app's objective of motivating users and igniting their enthusiasm to workout. By incorporating the concept of badges to recognize exercise progress and provide rewards, the logo effectively communicates this aspect of our app. </p>
            <img src="/fQWhiteBG.png" className={styles.fQLogo}/>
            <p className={styles.logoDescription}>The vibrant orange color is chosen to represent energy and serve as a motivational force. The gradient effect applied to the fire icon further enhances its dynamic impression, as if it is continuously igniting users' passion for exercise. </p>
            <h3 className={styles.topicH}>Color Variations</h3>
            <p className={styles.logoDescription}>We offer three logo variants: black & orange for light mode, white & orange for dark mode, and grayscale for users with visual impairments.</p>
            <div className={styles.variations}>
                <img src="/fqLight.png" className={styles.logoExampleTwo}/>
                <img src="/fqDark.png" className={styles.logoExampleOne}/>
                <img src="/fqGrey.png" className={styles.logoExampleThree}/>
            </div>
            <p className={styles.logoDescription}>Instead of focusing on specific exercise equipment or poses, we intentionally convey the message that maintaining a consistent workout routine is more important than the specific forms of exercise. This is demonstrated in our logo by the flame. Our aim is to create an inclusive environment that welcomes individuals with diverse exercise experiences, inviting them to join us and enjoy the workout videos.</p>
            <img src="/allVariants.png" className={styles.allVariants}/>
            <h3 className={styles.logoSize}>Logo sizing</h3>
            <p className={styles.spacingInfo}>Our logo spacing is based off the letter "s" in fitQuest. </p>
            <div className={styles.allSizing}>
                <div className={styles.spaceContainer}>
                    <img src="/fQSpacing.png" className={styles.spacing}/>
                    <h4>Full logo with clearspace</h4>
                </div>
                <div className={styles.spaceContainer}>
                <img src="/fQIconSpacings.png" className={styles.iconSpacing}/>
                    <h4>Logo icon with clearspace</h4>
                </div>
                <div className={styles.spaceContainer}>
                    <img src="fQLogoSIze.png" className={styles.size}/>
                    <h4>Minimum logo size with wordmark</h4>
                    <ul className={styles.list}>
                        <li>Total width: 141.78px</li>
                        <li>Total height: 35px</li>
                    </ul>
                </div>
                <div className={styles.spaceContainer}>
                    <img src="fQLogoIconSize.png" className={styles.size}/>
                    <h4>Minimum logo size</h4>
                    <ul className={styles.list}>
                        <li>Total width: 32.49px</li>
                        <li>Total height: 35px</li>
                    </ul>
                </div>
              </div>
            <h3 className={styles.favi}>Favicon</h3>
            <img src="/faviconSizes.png" className={styles.faviSpaceImg}/>
            <h3 className={styles.mustNever}>Must Never</h3>
            <p>Please do not alter the FitQuest logo in the following ways for any reason.</p>
            <ol className={styles.avoidList}>
                <li>Do not use colors that do not align with our brand colors.</li>
                <li>Do not use fonts that are not Nunito-ExtraBold.</li>
                <li>Do not skew, squeeze or alter logo in any way.</li>
                <li>Do not rotate the logo.</li>
                <li>Do not apply any effects.</li>
            </ol>
        </main>
      <Footer/>
      </>
    );
  }
  