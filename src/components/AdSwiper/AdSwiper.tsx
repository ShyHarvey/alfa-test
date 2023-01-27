import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";
import photo from '../../assets/adPhoto2.jpg'
import styles from './slideStyles.module.scss'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import './styles.scss'

// import required modules

export const AdSwiper: React.FC<{}> = () => {
    return (
        <>
            <div className='adSwiper'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={styles.container}>
                            <div className={styles.descContainer}>
                                <img className={styles.photo} src={photo} />
                                <div className={styles.description}>
                                    <p className={styles.name}>Топас-С 4 Пр</p>
                                    <p className={styles.subname}>До 4 человек</p>
                                    <p className={styles.oldCost}>98 300 ₽</p>
                                    <p className={styles.cost}>88 470 ₽</p>
                                    <table className={styles.infoTable}>
                                        <tbody>
                                            <tr>
                                                <th className={styles.left}>
                                                    Очистка:
                                                </th>
                                                <th className={styles.right}>
                                                    0.8 м3/сут
                                                </th>
                                            </tr>
                                            <tr>
                                                <th className={styles.left}>
                                                    Залповый сброс:
                                                </th>
                                                <th className={styles.right}>
                                                    175 л.
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.about}>Подробнее</button>
                                <button className={styles.order}>Заказать</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.container}>
                            <div className={styles.descContainer}>
                                <img className={styles.photo} src={photo} />
                                <div className={styles.description}>
                                    <p className={styles.name}>Топас-С 4 Пр</p>
                                    <p className={styles.subname}>До 4 человек</p>
                                    <p className={styles.oldCost}>98 300 ₽</p>
                                    <p className={styles.cost}>88 470 ₽</p>
                                    <table className={styles.infoTable}>
                                        <tbody>
                                            <tr>
                                                <th className={styles.left}>
                                                    Очистка:
                                                </th>
                                                <th className={styles.right}>
                                                    0.8 м3/сут
                                                </th>
                                            </tr>
                                            <tr>
                                                <th className={styles.left}>
                                                    Залповый сброс:
                                                </th>
                                                <th className={styles.right}>
                                                    175 л.
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.about}>Подробнее</button>
                                <button className={styles.order}>Заказать</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.container}>
                            <div className={styles.descContainer}>
                                <img className={styles.photo} src={photo} />
                                <div className={styles.description}>
                                    <p className={styles.name}>Топас-С 4 Пр</p>
                                    <p className={styles.subname}>До 4 человек</p>
                                    <p className={styles.oldCost}>98 300 ₽</p>
                                    <p className={styles.cost}>88 470 ₽</p>
                                    <table className={styles.infoTable}>
                                        <tbody>
                                            <tr>
                                                <th className={styles.left}>
                                                    Очистка:
                                                </th>
                                                <th className={styles.right}>
                                                    0.8 м3/сут
                                                </th>
                                            </tr>
                                            <tr>
                                                <th className={styles.left}>
                                                    Залповый сброс:
                                                </th>
                                                <th className={styles.right}>
                                                    175 л.
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.about}>Подробнее</button>
                                <button className={styles.order}>Заказать</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.container}>
                            <div className={styles.descContainer}>
                                <img className={styles.photo} src={photo} />
                                <div className={styles.description}>
                                    <p className={styles.name}>Топас-С 4 Пр</p>
                                    <p className={styles.subname}>До 4 человек</p>
                                    <p className={styles.oldCost}>98 300 ₽</p>
                                    <p className={styles.cost}>88 470 ₽</p>
                                    <table className={styles.infoTable}>
                                        <tbody>
                                            <tr>
                                                <th className={styles.left}>
                                                    Очистка:
                                                </th>
                                                <th className={styles.right}>
                                                    0.8 м3/сут
                                                </th>
                                            </tr>
                                            <tr>
                                                <th className={styles.left}>
                                                    Залповый сброс:
                                                </th>
                                                <th className={styles.right}>
                                                    175 л.
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.about}>Подробнее</button>
                                <button className={styles.order}>Заказать</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.container}>
                            <div className={styles.descContainer}>
                                <img className={styles.photo} src={photo} />
                                <div className={styles.description}>
                                    <p className={styles.name}>Топас-С 4 Пр</p>
                                    <p className={styles.subname}>До 4 человек</p>
                                    <p className={styles.oldCost}>98 300 ₽</p>
                                    <p className={styles.cost}>88 470 ₽</p>
                                    <table className={styles.infoTable}>
                                        <tbody>
                                            <tr>
                                                <th className={styles.left}>
                                                    Очистка:
                                                </th>
                                                <th className={styles.right}>
                                                    0.8 м3/сут
                                                </th>
                                            </tr>
                                            <tr>
                                                <th className={styles.left}>
                                                    Залповый сброс:
                                                </th>
                                                <th className={styles.right}>
                                                    175 л.
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.about}>Подробнее</button>
                                <button className={styles.order}>Заказать</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.container}>
                            <div className={styles.descContainer}>
                                <img className={styles.photo} src={photo} />
                                <div className={styles.description}>
                                    <p className={styles.name}>Топас-С 4 Пр</p>
                                    <p className={styles.subname}>До 4 человек</p>
                                    <p className={styles.oldCost}>98 300 ₽</p>
                                    <p className={styles.cost}>88 470 ₽</p>
                                    <table className={styles.infoTable}>
                                        <tbody>
                                            <tr>
                                                <th className={styles.left}>
                                                    Очистка:
                                                </th>
                                                <th className={styles.right}>
                                                    0.8 м3/сут
                                                </th>
                                            </tr>
                                            <tr>
                                                <th className={styles.left}>
                                                    Залповый сброс:
                                                </th>
                                                <th className={styles.right}>
                                                    175 л.
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.about}>Подробнее</button>
                                <button className={styles.order}>Заказать</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.container}>
                            <div className={styles.descContainer}>
                                <img className={styles.photo} src={photo} />
                                <div className={styles.description}>
                                    <p className={styles.name}>Топас-С 4 Пр</p>
                                    <p className={styles.subname}>До 4 человек</p>
                                    <p className={styles.oldCost}>98 300 ₽</p>
                                    <p className={styles.cost}>88 470 ₽</p>
                                    <table className={styles.infoTable}>
                                        <tbody>
                                            <tr>
                                                <th className={styles.left}>
                                                    Очистка:
                                                </th>
                                                <th className={styles.right}>
                                                    0.8 м3/сут
                                                </th>
                                            </tr>
                                            <tr>
                                                <th className={styles.left}>
                                                    Залповый сброс:
                                                </th>
                                                <th className={styles.right}>
                                                    175 л.
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.about}>Подробнее</button>
                                <button className={styles.order}>Заказать</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}