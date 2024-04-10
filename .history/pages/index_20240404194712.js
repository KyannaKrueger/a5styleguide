import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header/>
      <main className={`${styles.main}`}>
       <h1>Howdy</h1>
      </main>
      <Footer/>
    </>
  );
}
