import styles from './video.module.css';
const BackgroundVideo = () => (
    <video autoPlay muted loop className={styles.backgroundVideo}>
      <source src="/background-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
  
  export default BackgroundVideo;
  