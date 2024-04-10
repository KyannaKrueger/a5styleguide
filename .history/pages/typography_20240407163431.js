import styles from "@/styles/typography.module.css";
import Header from "@/components/Header";

export default function Typography() {
    return (
      <>
      <Header/>
        <main className={styles.typography}>
        <h1 className={styles.typoTitle}>Typography</h1>
        <p className={styles.typoText}>San Francisco Pro is an Apple-designed typeface that provides a consistent, legible, and friendly typographic voice.

            Choosing the SF Pro typography for our fitness app font offers plenty advantages. First, the size-specific outlines and dynamic tracking guarantee optimal legibility across various screen resolutions, crucial for displaying detailed fitness data and time-related information. With proportional widths for numbers, SF Pro maintains harmony and natural spacing, enhancing readability within the app's data-centric interfaces.

            SF Pro also offers nine weights, including italics, and features like small caps and fractions that provide precision typesetting capabilities, ideal for presenting different information.<br/>

            Another reeason why we chose this font is because SF Pro supports for over 150 languages across various scripts ensures inclusivity for a diverse user base.</p>
        <h1 className={styles.bigSF}>SF Pro</h1>
        <p className={styles.typoText}>To summarize, SF Pro combines aesthetic appeal, functionality, and user experience optimization, making it an ideal typographic choice for fostering engagement and usability within our fitness app.</p>
        <div className={styles.exampleContainer}>
            <h3 className={styles.characterH}>Example Characters:</h3>
            <p className={styles.characters}>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqristuvwxyz<br/>1234567890</p>
        </div>
        <div className={styles.logoExContainer}>
            <h3 className={styles.characterH}>Example Characters:</h3>
            <p className={styles.characters}>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqristuvwxyz<br/>1234567890</p>
        </div>
        <h3 className={styles.headingH}>Heading sizes:</h3>
        <p>SF Pro Bold 38px</p>
        <p>SF Pro Bold 32px</p>
        </main>
      </>
    );
  }
  