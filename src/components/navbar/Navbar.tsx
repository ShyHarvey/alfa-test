import React from 'react'
import styles from './navbar.module.scss'

export const Navbar: React.FC<{}> = () => {
    return (
        <div className={styles.container} >
            <a href='#'>Каталог домов</a>
            <a href='#'>Услуги</a>
            <a href='#'>О нас</a>
            <a href='#'>Контакты</a>
            <a href='#'>Блог</a>
        </div>
    )
}