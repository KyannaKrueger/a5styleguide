import styles from "@/styles/references.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ref() {
    return (
      <>
      <Header/>
        <main className={styles.refPage}>
        <h1>References</h1>
        <h3>Images from adobe stock</h3>
        <h3>Icons by</h3>
        <h3>App Videos from Youtube</h3>
        </main>
      <Footer/>
      </>
    );
  }
  