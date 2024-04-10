import styles from "@/styles/graphics.module.css";
import Header from "@/components/Header";

export default function Graphics() {
    return (
      <>
      <Header/>
        <main className={styles.graphics}>
        <h1 className={styles.graphicsH}>Graphics</h1>
        <p>Badges are used to track progress and acknowledge users' milestones in workout achievements. For instance, upon watching 20 Upper Body videos, users can earn a bronze badge. This system motivates users to persist in their workouts, striving to earn more badges displayed within the app and share their achievements with friends.</p>
        <img src ="/badges.png"/>
        </main>
      </>
    );
  }
  