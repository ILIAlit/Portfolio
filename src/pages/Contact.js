import styles from "./../styles/style-contact.module.css";
import cover from "./../IMG/ContactCover/ContactCover.jpg";




const Contact = () => {
  return (
    <main className={`${styles.main} _container`}>
            <div className={styles.main__body}>
                <div className={styles.main__cover}>
                    <img src={cover} alt="photo"/>
                </div>
                <div className={styles.main__info}>
                    <div className={styles.main__title}>Контакты</div>
                    <div className={styles.main_line}></div>
                    <div className={styles.main__items}>
                        <ul className={styles.main__items}>
                          <li className={`${styles.main__item} ${styles.main__item1}`}><a href="mailto:ilialitvinenko2004@gmail.com">ilialitvinenko2004@gmail.com</a></li>
                          <li className={`${styles.main__item} ${styles.main__item2}`}><a href="https://t.me/ILIALiT">t.me/ILIALiT</a></li>
                          <li className={`${styles.main__item} ${styles.main__item3}`}><a href="https://www.behance.net/iliya1">behance.net/iliya</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
  );
}

export default Contact;