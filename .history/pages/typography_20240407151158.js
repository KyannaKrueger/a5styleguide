import styles from "@/styles/typography.module.css";
import Header from "@/components/Header";

export default function Typography() {
    return (
      <>
      <Header/>
        <main className={styles.typography}>
        <h1 className={styles.typoTitle}>Typography</h1>
        <p className={styles.typoText}>San Francisco Pro is an Apple-designed typeface that provides a consistent, legible, and friendly typographic voice.<br/>

            Choosing the SF Pro typography for our fitness app font offers plenty advantages. First, the size-specific<br/> outlines and dynamic tracking guarantee optimal legibility across various screen resolutions, crucial for<br/> displaying detailed fitness data and time-related information. With proportional widths for numbers,<br/> SF Pro maintains harmony and natural spacing, enhancing readability within the app's data-centric interfaces.<br/>

            Second, SF Pro offers nine weights, including italics, and features like small caps and fractions<br/> that provide precision typesetting capabilities, ideal for presenting different information.<br/>

            Last, SF Pro supports for over 150 languages across various scripts ensures inclusivity for a diverse user base.</p>

        <p className={stylesTwo}>In conclusion, SF Pro combines aesthetic appeal, functionality, and user experience optimization, making it an ideal typographic choice for fostering engagement and usability within our fitness app.</p>
        </main>
      </>
    );
  }
  