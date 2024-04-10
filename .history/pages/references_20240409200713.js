import styles from "@/styles/references.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ref() {
    return (
      <>
      <Header/>
        <main className={styles.refPage}>
        <h1 className={styles.ref}>References</h1>
        <h3 className={styles.refHeadings}>Images from adobe stock</h3>
        <a href="https://stock.adobe.com/ca/" className={styles.refLink}>Visit Adobe Stock</a>
        <h3 className={styles.refHeadings}>App Videos from <a href="https://www.youtube.com/" className={styles.refLink}>Youtube<a/></h3>
        <a href="https://www.youtube.com/" className={styles.refLink}>Visit Youtube</a>
        </main>
      <Footer/>
      </>
    );
  }
  