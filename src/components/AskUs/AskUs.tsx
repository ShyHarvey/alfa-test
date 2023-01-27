import React from 'react'
import image from '../../assets/footerImage.jpg'
import key from '../../assets/key.jpg'
import styles from './ask.module.scss'
export const AskUs: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} />
            <img className={styles.keyImage} src={key} />
            <div className={styles.askForm}>
                <p className={styles.head}>Не нашли то, что искали?</p>
                <p className={styles.subhead}>Заполните форму и мы перезвоним вам в течение 30 минут!</p>
                <form className={styles.form}>
                    <input className={styles.input} type="text" name='name' placeholder='Ваше имя' />
                    <input className={styles.input} type="text" name='phone' placeholder='Номер телефона' />
                    <input className={styles.input} type="text" name='que' placeholder='Ваш вопрос (необязательно)' />
                    <input className={styles.button} type="button" name='button' value="Отправить" />
                </form>

            </div>
        </div>
    )
}