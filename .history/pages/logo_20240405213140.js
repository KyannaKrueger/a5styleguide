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
            <p className={styles.logoDescription}>We offer three logo variants: black & orange for light mode, white & orange for dark mode, and grayscale for users with visual impairments.</p>
            <div className={styles.variations}>
                <img src="/fqDark.png"/>
            </div>
            <p className={styles.logoDescription}>The vibrant orange color is chosen to represent energy and serve as a motivational force. The gradient effect applied to the fire icon further enhances its dynamic impression, as if it is continuously igniting users' passion for exercise. </p>
            <p className={styles.logoDescription}>Instead of focusing on specific exercise equipment or poses, we intentionally convey the message that maintaining a consistent workout routine is more important than the specific forms of exercise. Our aim is to create an inclusive environment that welcomes individuals with diverse exercise experiences, inviting them to join us and enjoy the workout videos.</p>
        </main>
      <Footer/>
      </>
    );
  }
  