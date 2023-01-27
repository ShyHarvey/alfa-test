import React from 'react'
import styles from './footer.module.scss'
import darkLogo from '../../assets/darkLogo.svg'
import logoWhite from '../../assets/lightLogo.svg'
import vk from '../../assets/vk.svg'
import face from '../../assets/face.svg'
import inst from '../../assets/inst.svg'
import youtube from '../../assets/youtube.svg'

export const Footer: React.FC<{}> = () => {
    return (
        <div className={styles.footer}>
            <footer className={styles.container}>
                <div className={styles.column}>
                    <img className={styles.darkLogo} src={darkLogo} alt='dark logo' />
                    <button className={styles.orderButton}>Заказать звонок</button>
                </div>
                <div className={styles.column}>
                    <a className={styles.footerLinks} href='#'>Главная</a>
                    <a className={styles.footerLinks} href='#'>Каталог</a>
                    <a className={styles.footerLinks} href='#'>Услуги</a>
                    <a className={styles.footerLinks} href='#'>Расчёт стоимости</a>
                    <a className={styles.footerLinks} href='#'>Консультация архитектора</a>
                </div>
                <div className={styles.column}>
                    <a className={styles.footerLinks} href='#'>Экскурсия на объект</a>
                    <a className={styles.footerLinks} href='#'>3D-макет дома</a>
                    <a className={styles.footerLinks} href='#'>О нас</a>
                    <a className={styles.footerLinks} href='#'>Блог</a>
                    <a className={styles.footerLinks} href='#'>Контакты</a>
                </div>
                <div className={styles.column}>
                    <p className={styles.footerText}>Делимся крутыми проектам в <br /> соц.сетях. Подписывайтесь!</p>
                    <div className={styles.contacts}>
                        <img src={vk} alt='vk' />
                        <img src={inst} alt='inst' />
                        <img src={face} alt='face' />
                        <img src={youtube} alt='youtube' />
                    </div>
                    <p className={styles.footerText}>Разработка и продвижение сайта:</p>
                    <img className={styles.logoWhite} src={logoWhite} alt='white logo' />
                </div>
            </footer>
        </div>
    )
}