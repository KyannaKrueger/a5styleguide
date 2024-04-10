import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header/>
      <main className={`${styles.main}`}>
       <h1>FitQuest</h1>
       <h2>Styleguide</h2>
      </main>
      <Footer/>
    </>
  );
}
