import React from 'react'
import styles from './header.module.scss'
import logo from '../../assets/image 1.jpg'
import maketIcon from '../../assets/3D.svg'
import telephoneIcon from '../../assets/telephoneIcon.svg'
import viberIcon from '../../assets/viber.svg'
import telegram from '../../assets/telegramm.svg'
import watsappIcon from '../../assets/watsapp.svg'
export const Header: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt='Alfa-logo' />
            <p className={styles.mode}>Пн-Сб: c 10:00 до 20:00<br />
                Выходной: воскресенье</p>
            <div className={styles.maket}>
                <img src={maketIcon} alt='make 3d maket' />
                <p>Заказать 3D-макет дома</p>
            </div>
            <div className={styles.boxRow}>
                <div className={styles.telephoneIcon}>
                    <img src={telephoneIcon} alt='telephone Icon' />
                </div>
                <div className={styles.contacts}>
                    <a href='tel:+79151685550'>+7 915 168-55-50</a>
                    <div className={styles.boxContacts}>
                        <a href='#'>
                            <img className={styles.contactItem} src={watsappIcon} alt='telephone Icon' />
                        </a>
                        <a href='#'>
                            <img className={styles.contactItem} src={telegram} alt='telephone Icon' />
                        </a>
                        <a href='#'>
                            <img className={styles.contactItem} src={viberIcon} alt='telephone Icon' />
                        </a>
                    </div>
                </div>
            </div>
            <button className={styles.orderButton}>Заказать звонок</button>
        </div>
    )
}