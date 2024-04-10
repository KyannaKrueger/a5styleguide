import styles from "@/styles/graphics.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Graphics() {
    return (
      <>
      <Header/>
        <main className={styles.graphics}>
        <h1 className={styles.graphicsH}>Graphics</h1>
        <p className={styles.badgesP}>Badges are used to track progress and acknowledge users' milestones in workout<br/> achievements. For instance, upon watching 20 Upper Body videos, users can earn a bronze badge. This system motivate<br/>s users to persist in their workouts, striving to earn more badges displayed within the app and share their achievements<br/> with friends.</p>
        <img src ="/fQBadge.png" className={styles.badgesImg}/>
        <div className={styles.line}></div>
        <p className={styles.navP}>Icons are employed to offer users visual cues, enhancing navigation and the overall user experience. 5 primary icons are<br/> adopted to facilitate navigation at the bottom of the mobile screen.</p>
        <img src="/homeIcon.png" className={styles.homeIcon}/>
        <p className={styles.homeP}>The Home button navigates users to the home screen, where they can access all main features of the app, including Daily Challenges, Workout Videos,<br/> Fitness Statistics, and Nutrition Tips. This button is expected to be the most frequently used by users, so it is located in the middle of the navigation bar<br/> and stands out slightly from the other icons.</p>
        <img src="/workoutIcon.png" className={styles.workoutIcon}/>
        <p className={styles.workoutP}>This Workout icon allows users to navigate directly to the workout videos page, which contains various categories of workout videos. It is one of the main<br/> features of the fitness app, so besides having an action button on the homepage, it is also included in the navigation bar for users to easily locate videos,<br/> regardless of their current page.</p>
        <img src="/rewardIcon.png" className={styles.rewardIcon}/>
        <p className={styles.rewardsP}>The Rewards icon lets users navigate to the 'My Rewards' page, which features a rewards action button, users' achievements, and statistical records.<br/> This page serves as a summary of users' statistics, allowing them to overview their progress within the app. It acts as a motivational tool, encouraging<br/> users to monitor their results and redeem rewards.</p>
        <img src="/nutritionIcon.png" className={styles.nutritionIcon}/>
        <p className={styles.nutritionP}>The Nutrition button directs users to the articles page featuring nutrition information. Users can browse articles and search for nutrition tips and knowledge.<br/>The nutrition page goes hand in hand with our app because working out and nutrition are often linked together.</p>
        <img src="/settingsIcon.png" className={styles.settingsIcon}/>
        <p className={styles.settingsP}>The Settings button directs users to the settings page of the app, where they can adjust their preferences and customize their accessibility settings.<br/> The range of settings offers users a more accessible and inclusive user experience.</p>
        <div className={styles.lineTwo}></div>
        <h3 className={styles.avatars}>Avatars</h3>
        <p className={styles.avatarsP}>Our app offers 16 variations of avatars for users to choose from when signing up for an account. These avatars vary in age,<br/> ethnicity, gender, beliefs, and whether or not they wear glasses. While our primary audience is the younger generation, we<br/> strive to be inclusive of all backgrounds. However, it is impossible to satisfy all user characteristics entirely. Therefore, we also<br/> provide users with the option to upload their own chosen image to represent themselves on their account, ensuring everyone<br/> feels accurately represented.</p>
        <img src="/allCharacters.png" className={styles.allCharacters}/>
        <div className={styles.lineTwo}></div>
        <h3 className={styles.buttons}>Buttons and Cards</h3>
        <p className={styles.buttonPOne}>The design of buttons and cards throughout the app features rounded shapes, aligning with our goal to evoke a sense of<br/> friendliness and approachability. Beyond maintaining consistency, research indicates that rounded shapes offer a visually <br/>pleasing appearance and contribute to a modern and harmonious user experience.</p>
        <img src="/buttonImg.png" className={styles.buttonImg}/>
        <p className={styles.buttonPTwo}>Human eyes are naturally drawn to curves, making rounded buttons more prominent than straight lines. Additionally,<br/> rounded buttons are considered more inclusive and accessible to<br/> users with motor impairments because they are easier to recognize and help reduce the risk of accidental touches.</p>
        <img src="/cardsExample.png" className={styles.card}/>
        <img src="/roundedExample.png" className={styles.rounded}/>
        <p className={styles.iconsExOne}>For the icons designed throughout the app, our aim is to illustrate a body in a simple manner, maintaining neutrality and inclusivity. We typically ask users two questions to determine their<br/> workout preferences and then filter the suggested videos accordingly, enhancing accessibility.</p>
        <img src="/quizEx.png" className={styles.quizEx}/>
        <p className={styles.appOffersP}>The app offer a wide range of workout videos suitable for beginners, users with regular exercise routines, and advanced levels, with options for both equipment-based and equipment-free<br/> workouts. This also contributes to a high level of inclusivity and accessibility.</p>
        <div className={styles.lineTwo}></div>
        <h3 className={styles.images}>Images and Inspirations</h3>
        <p className={styles.imgP}> For the videos and images utilized throughout the app, we uphold the principle of<br/> inclusivity, aiming to encourage users with diverse exercise backgrounds to join and follow<br/> the workout videos. Therefore, we offer a variety of videos featuring male or female coaches,<br/> coaches in groups, and coaches of different ethnicities. </p>
       <div className={styles.gallery}>
            <img src="/beginner_group.png" className={styles.img}/>
            <img src="/home fitness image.jpeg" className={styles.img}/>
            <img src="/Yoga-for-the-weight-loss.jpg" className={styles.img}/>
            <img src="/YogaLady.jpeg" className={styles.img}/>
            <img src="/yogaGirls.jpeg" className={styles.img}/>
            <img src="/intermediate cardio_with glasses.jpeg" className={styles.img}/>
        </div>
        <p className={styles.lastP}> As our app aims to deliver professional-quality workout videos, the majority of the videos are <br/>led by professional coaches who typically have well-toned bodies. This not only ensures professionalism but also serves as motivation for users to strive for better results. 
</p>
        <p className={styles.lastP}> However, some of the images used for thumbnails in the app are parent-friendly and feature<br/> individuals from different age groups and body shapes. This is intended to cultivate a friendly and welcoming environment for users from various backgrounds.
</p>
        </main>
        <Footer/>
      </>
    );
  }
  