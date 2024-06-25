import { SlideImage } from '../../assets/icons/slideImage';
import styles from './About.module.scss';


export const Slide = ({backgroundColor}) => {
  return (
    <div className={styles.slide} style={{ backgroundColor: backgroundColor }}>
    <div className={styles.slide__wrap}>
      <div className={styles.slide__wrapImage}>
        <SlideImage />
      </div>
      <h4>Nisi ullamco<br /> tempor tempor<br /> nulla.</h4>
    </div>
    <p>Nisi ullamco tempor tempor nulla labore ad labore sit eu duis. </p>
  </div>
  )
}