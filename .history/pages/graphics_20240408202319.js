import styles from "@/styles/graphics.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <p className={styles.homeP}>The Home button navigates users to the home screen, where they can access all main features of the app, including Daily Challenges, Workout Videos,<br/> Fitness Statistics, and Nutrition Tips. This button is expected to be the most frequently used by users, so it is located in the middle of the navigation bar<br/> and stands out slightly from the other icons.</p>
        <img src="/workoutIcon.png" className={styles.workoutIcon}/>
        <p className={styles.workoutP}>This Workout icon allows users to navigate directly to the workout videos page, which contains various categories of workout videos. It is one of the main<br/> features of the fitness app, so besides having an action button on the homepage, it is also included in the navigation bar for users to easily locate videos,<br/> regardless of their current page.</p>
        <img src="/rewardIcon.png" className={styles.rewardIcon}/>
        <p className={styles.rewardsP}>The Rewards icon lets users navigate to the 'My Rewards' page, which features a rewards action button, users' achievements, and statistical records.<br/> This page serves as a summary of users' statistics, allowing them to overview their progress within the app. It acts as a motivational tool, encouraging<br/> users to monitor their results and redeem rewards.</p>
        <img src="/nutritionIcon.png" className={styles.nutritionIcon}/>
        <p className={styles.nutritionP}>The Nutrition button directs users to the articles page featuring nutrition information. Users can browse articles and search for nutrition tips and knowledge.<br/>The nutrition page goes hand in hand with our app because working out and nutrition are often linked together.</p>
        <img src="/settingsIcon.png" className={styles.settingsIcon}/>
        <p className={styles.settingsP}>The Settings button directs users to the settings page of the app, where they can adjust their preferences and customize their accessibility settings. The range of settings offers users a more accessible and inclusive user experience.</p>
        <div className={styles.lineTwo}></div>
        <h3 className={styles.avatars}>Avatars</h3>
        <p className={styles.avatarsP}>Our app offers 16 variations of avatars for users to choose from when signing up for<br/> an account. These avatars vary in age, ethnicity, gender, beliefs, and whether or not they<br/> wear glasses. While our primary audience is the younger generation, we strive to be inclusive<br/> of all backgrounds. However, it is impossible to satisfy all user characteristics entirely.<br/> Therefore, we also provide users with the option to upload their own chosen image to represent themselves on their account, ensuring everyone feels accurately represented.</p>
        <img src="/allCharacters.png" className={styles.allCharacters}/>
        <div className={styles.lineTwo}></div>
        <h3 className={styles.buttons}>Buttons and Cards</h3>
        <p className={styles.buttonPOne}>The design of buttons and cards throughout the app features rounded shapes, aligning with<br/> our goal to evoke a sense of friendliness and approachability. Beyond maintaining consistency, research indicates that rounded shapes offer a visually pleasing appearance and contribute to a modern and harmonious user experience.</p>
        <img src="/buttonImg.png" className={styles.buttonImg}/>
        <p className={styles.buttonPTwo}>Human eyes are naturally drawn to curves, making rounded buttons more prominent than<br/> straight lines. Additionally, rounded buttons are considered more inclusive and accessible to<br/> users with motor impairments because they are easier to recognize and help reduce the risk of accidental touches.</p>
        <img src="/cardsExample.png" className={styles.card}/>
        <img src="/roundedExample.png" className={styles.rounded}/>
        <p className={styles.iconsExOne}>For the icons designed throughout the app, our aim is to illustrate a body in a simple manner, maintaining neutrality and inclusivity. We typically ask users two questions to determine their<br/> workout preferences and then filter the suggested videos accordingly, enhancing accessibility.</p>
        <p className={styles.appOffersP}>The app offer a wide range of workout videos suitable for beginners, users with regular exercise routines, and advanced levels, with options for both equipment-based and equipment-free workouts. This also contributes to a high level of inclusivity and accessibility.</p>
        </main>
        <Footer/>
      </>
    );
  }
  