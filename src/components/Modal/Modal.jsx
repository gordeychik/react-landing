import styles from './Modal.module.scss';

export const Modal = ({ active, setActive }) => {
  return (
    <div className={`${styles.modal} ${active ? styles.active : ''}`} onClick={() => setActive(false)}>
        <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
            <h2>Here's popup!</h2>
            <div className={styles.gif__wrap}>
                <img src='../../src/assets/icons/modal-gif.gif' />
            </div>
        </div>
    </div>
  );
}