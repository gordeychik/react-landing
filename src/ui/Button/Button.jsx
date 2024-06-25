import styles from './Button.module.scss';

export const Button = ({children, backgroundColor, color, type, handleClick}) => {
  return (
    <button onClick={handleClick} className={styles.button} style={{ backgroundColor: backgroundColor, color: color}} type={type}>{children}</button>
  )
}