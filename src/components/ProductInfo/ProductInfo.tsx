import React from 'react'
import styles from './productInfo.module.scss'
import SwiperForProduct from '../SwiperForProduct/SwiperForProduct.jsx'
import { DetailsForm } from '../detailsForm/detailsForm'
import pipe from '../../assets/pipe.png'
import water from '../../assets/water.jpg'

export const ProductInfo = () => {
    return (
        <>
            <p className={styles.productName}>Топас-С 4</p>
            <div className={styles.container}>
                <div>
                    <SwiperForProduct />
                    <DetailsForm />
                </div>
                <div>
                    <table className={styles.infoTable}>
                        <tbody>
                            <tr>
                                <th className={styles.left}>
                                    Количество пользователей:
                                </th>
                                <th className={styles.right}>
                                    4 человека
                                </th>
                            </tr>
                            <tr>
                                <th className={styles.left}>
                                    Производительность:
                                </th>
                                <th className={styles.right}>
                                    0.8 м3/сут
                                </th>
                            </tr>
                            <tr>
                                <th className={styles.left}>
                                    Объем залпового сброса:
                                </th>
                                <th className={styles.right}>
                                    175 л.
                                </th>
                            </tr>
                            <tr>
                                <th className={styles.left}>
                                    Глубина подводящей трубы:
                                </th>
                                <th className={styles.right}>
                                    40-80 см
                                </th>
                            </tr>
                            <tr>
                                <th className={styles.left}>
                                    Потребляемая электроэнергия:
                                </th>
                                <th className={styles.right}>
                                    1500 Вт/сут
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.cost}>
                        <span>Цена</span> <span className={styles.costGreen}>78 030 ₽</span>
                    </div>
                    <div className={styles.about}>
                        <p className={styles.aboutHead}>Описание модели</p>
                        <p className={styles.aboutText}>Индивидуальная система биологической очистки Топас-С 4, как и другие УОСВ из данного модельного ряда,
                            очищают стоки до 98% без вреда для экологии. Все модификации септика ТОПАС-С 4 очищают до 0.8 м3
                            сточных вод в сутки и имеют максимальный залповый сброс в районе 175 литров. Уже отработанную воду
                            можно накапливать в отдельном резервуаре и в дальнейшем использовать для хозяйственных нужд или
                            производить сброс очищенной воды в ливневую канаву (для моделей Пр со встороенным насосом).</p>
                    </div>
                </div>
                <img className={styles.water} src={water} alt="water" />
                <img className={styles.pipe} src={pipe} alt="pipe" />
            </div>
            <p className={styles.adHead}>Вам также могут понравится</p>
        </>
    )
}