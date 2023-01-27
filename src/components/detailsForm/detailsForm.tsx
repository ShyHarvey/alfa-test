import React from 'react'
import styles from './detailsForm.module.scss'

export const DetailsForm: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <p className={styles.head}>Обсудим детали?</p>
            <form className={styles.detailsForm}>
                <input className={styles.input} name='name' type="text" placeholder='Ваше имя' />
                <input className={styles.input} name='number' type="text" placeholder='Номер телефона' />
                <input className={styles.button} name='button' type="submit" value='Хочу обсудить детали' />
            </form>
        </div>
    )
}