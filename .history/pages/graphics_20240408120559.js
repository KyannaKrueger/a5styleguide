import styles from "@/styles/graphics.module.css";
import Header from "@/components/Header";

export default function Graphics() {
    return (
      <>
      <Header/>
        <main className={styles.graphics}>
        <h1 className={styles.graphicsH}>Graphics</h1>
        <p className={styles.badgesP}>Badges are used to track progress and acknowledge users' milestones in workout<br/> achievements. For instance, upon watching 20 Upper Body videos, users can earn<br/> a bronze badge. This system motivates users to persist in their workouts, striving to<br/> earn more badges displayed within the app and share their achievements with friends.</p>
        <img src ="/fQBadge.png" className={styles.badgesImg}/>
        <p>Icons are employed to offer users visual cues, enhancing navigation and the overall user experience. <br/>5 primary icons are adopted to facilitate navigation at the bottom of the mobile screen.</p>
        </main>
      </>
    );
  }
  