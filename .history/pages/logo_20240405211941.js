import styles from "@/styles/logo.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Logo() {
    return (
      <>
      <Header/>
        <main className={styles.logoPage}>
        <h1>hi</h1>
        </main>
      <Footer/>
      </>
    );
  }
  