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
        <div className={styles.line}></div>
        <p className={styles.navP}>Icons are employed to offer users visual cues, enhancing navigation and the overall<br/> user experience. 5 primary icons are adopted to facilitate navigation at the bottom of<br/> the mobile screen.</p>
        <img src="/homeIcon.png" className={styles.homeIcon}/>
        <p className={styles.homeP}>The Home button navigates users to the home screen, where they can access all main features of the app, including Daily Challenges, Workout Videos, Fitness Statistics, and Nutrition Tips. This button is expected to be the most frequently used by users, so it is located in the middle of the navigation bar and stands out slightly from the other icons.</p>
        <img src="/workoutIcon.png" className={styles.workoutIcon}/>
        <img src="/rewardIcon.png" className={styles.rewardIcon}/>
        <img src="/nutritionIcon.png" className={styles.nutritionIcon}/>
        <img src="/settingsIcon.png" className={styles.settingsIcon}/>
        </main>
      </>
    );
  }
  