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
            <img src="/fitQuestLogoHQ.svg" className={styles.fQLogo}/>
            <p className={styles.logoDescription}>The vibrant orange color is chosen to represent energy and serve as a motivational force. The gradient effect applied to the fire icon further enhances its dynamic impression, as if it is continuously igniting users' passion for exercise. </p>
            <h3 className={styles.topicH}>Color Variations</h3>
            <p className={styles.logoDescription}>We offer three logo variants: black & orange for light mode, white & orange for dark mode, and grayscale for users with visual impairments.</p>
            <div className={styles.variations}>
                <img src="/fqLight.png" className={styles.logoExampleTwo}/>
                <img src="/fqDark.png" className={styles.logoExampleOne}/>
                <img src="/fqGrey.png" className={styles.logoExampleThree}/>
            </div>
            <p className={styles.logoDescription}>Instead of focusing on specific exercise equipment or poses, we intentionally convey the message that maintaining a consistent workout routine is more important than the specific forms of exercise. This is demonstrated in our logo by the flame. Our aim is to create an inclusive environment that welcomes individuals with diverse exercise experiences, inviting them to join us and enjoy the workout videos.</p>
            <h3 className={styles.logoSize}>Logo sizing</h3>
            <p>Our logo spacing is based off the letter "s" in fitQuest. </p>
            <img src="/fQSpacing.png"/>
            <img src="/fQIconSpacing.png"/>
            <img src="fQLogoSIze.png"/>
            <h3 className={styles.logoMust}>Must Do</h3>
            <h3 className={styles.logoNever}>Must Never</h3>
        </main>
      <Footer/>
      </>
    );
  }
  