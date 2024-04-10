import styles from "@/styles/references.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ref() {
    return (
      <>
      <Header/>
        <main className={styles.refPage}>
        <h1 className={styles.ref}>References</h1>
        <h3 className={styles.refHeadings}>Images from <a href="https://stock.adobe.com/ca/" className={styles.refLink}>adobe stock</a></h3>
        <h3 className={styles.refHeadings}>App Videos from <a href="https://www.youtube.com/" className={styles.refLink}>Youtube</a></h3>
        <h3 className={styles.refHeadings}>Color from <a href="https://m2.material.io/design/color/dark-theme.html#behavior" className={styles.refLink}>Google Material Design</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.ux-republic.com/en/which-border-radius-to-adopt-for-your-cta-copy/" className={styles.refLink}>Verywell mind</a></h3>
        <h3 className={styles.refHeadings}>Buttons & Cards Design from <a href="https://medium.com/@IrfanUlahBaig/comparing-the-aesthetics-of-rounded-and-rectangular-buttons-6294cae40061#:~:text=Focus%20on%20Inclusion%3A%20Rounded%20buttons,for%20users%20with%20motor%20impairments" className={styles.refLink}>Medium</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.ux-republic.com/en/which-border-radius-to-adopt-for-your-cta-copy/" className={styles.refLink}>UX Republic</a></h3>
        <h3 className={styles.refHeadings}>Logo Font from <a href="https://medium.com/@imigeddes/nunito-type-spec-a-ui-casestudy-4b1d09f5656a" className={styles.refLink}>Medium</a></h3>
        <h3 className={styles.refHeadings}>Typography from <a href="https://developer.apple.com/fonts/ " className={styles.refLink}>Youtube</a></h3>
        </main>



        And also the references for other parts

references: 

Color:
https://www.verywellmind.com/the-color-psychology-of-orange-2795818#:~:text=Orange%20Is%20Energetic,uniforms%2C%20mascots%2C%20and%20branding.

https://m2.material.io/design/color/dark-theme.html#behavior

Buttons & Cards Design:
https://medium.com/@IrfanUlahBaig/comparing-the-aesthetics-of-rounded-and-rectangular-buttons-6294cae40061#:~:text=Focus%20on%20Inclusion%3A%20Rounded%20buttons,for%20users%20with%20motor%20impairments.

https://www.ux-republic.com/en/which-border-radius-to-adopt-for-your-cta-copy/

Logo Font: 
https://medium.com/@imigeddes/nunito-type-spec-a-ui-casestudy-4b1d09f5656a

Typography:
https://developer.apple.com/fonts/ 

      <Footer/>
      </>
    );
  }
  