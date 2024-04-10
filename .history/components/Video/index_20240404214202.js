import styles from './video.module.css'; 

const Video = () => (
  <video autoPlay muted loop className={styles.backgroundVideo}>
    <source src="/fitQuestSlideshow.mp4" type="video/mp4" />
  </video>
);

export default Video;

  