import React from 'react';
import classes from './Footer.module.css';
import telegram from './../../img/icons/telegram.svg';
import phone from './../../img/icons/phone.svg';
import whatsapp from './../../img/icons/whatsapp.svg';

const Footer = () => {
    return (
        <div className={classes.box}>
            <div className={`${classes.nav} ${classes.inter}`}>
                <div className={classes.company}>
                    <div>
                        <p className={classes.navHeadlinesFont}>О КОМПАНИИ</p>
                    </div>
                    <div className={`${classes.points} ${classes.mobilePointsCompany}`}>
                        <div className={`${classes.point}`}>
                            <p className={classes.pointFont}>Партнёрская программа</p>
                        </div>
                        <div className={`${classes.point} ${classes.vacancy}`}>
                            <p className={classes.pointFont}>Вакансии</p>
                        </div>
                    </div>
                </div>
                <div className={classes.menu}>
                    <div>
                        <p className={classes.navHeadlinesFont}>МЕНЮ</p>
                    </div>
                    <div className={classes.menuPoints}>
                        <div className={`${classes.points} ${classes.mobilePointsMenu}`}>
                            <div className={`${classes.point} ${classes.mobilePoint}`}>
                                <p className={classes.pointFont}>Расчёт стоимости</p>
                            </div>
                            <div className={`${classes.point} ${classes.mobilePoint}`}>
                                <p className={classes.pointFont}>Услуги</p>
                            </div>
                            <div className={`${classes.point} ${classes.mobilePoint}`}>
                                <p className={classes.pointFont}>Виджеты</p>
                            </div>
                            <div className={`${classes.point} ${classes.mobilePoint}`}>
                                <p className={classes.pointFont}>Интеграции</p>
                            </div>
                            <div className={`${classes.point} ${classes.mobilePoint}`}>
                                <p className={classes.pointFont}>Наши клиенты</p>
                            </div>
                        </div>
                        <div className={`${classes.points} ${classes.casesBox}`}>
                            <div className={`${classes.point} ${classes.mobilePoint} ${classes.standartNone}`}>
                                <p className={classes.pointFont}>Благодарность клиентов</p>
                            </div>
                            <div className={`${classes.point} ${classes.mobilePoint}`}>
                                <p className={classes.pointFont}>Кейсы</p>
                            </div>
                            <div className={`${classes.point} ${classes.mobilePoint} ${classes.mobileNone}`}>
                                <p className={classes.pointFont}>Благодарственные письма</p>
                            </div>
                            <div className={`${classes.point} ${classes.mobilePoint}`}>
                                <p className={classes.pointFont}>Сертификаты</p>
                            </div>
                            <div className={`${classes.point} ${classes.mobilePoint}`}>
                                <p className={classes.pointFont}>Блог на Youtube</p>
                            </div>
                            <div className={`${classes.point} ${classes.mobilePoint}`}>
                                <p className={classes.pointFont}>Вопрос / Ответ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.contacts}>
                    <div>
                        <p className={classes.navHeadlinesFont}>КОНТАКТЫ</p>
                    </div>
                    <div>
                        <div className={classes.phoneBox}>
                            <p className={classes.phoneFont}>+7 555 555-55-55</p>
                        </div>
                        <div className={classes.iconBox}>
                            <img src={telegram} alt="telegram" className={`${classes.icon} ${classes.telegramIcon}`}/>
                            <img src={phone} alt="phone" className={`${classes.icon} ${classes.viber}`}/>
                            <img src={whatsapp} alt="whatsapp" className={`${classes.icon} ${classes.whatsapp}`}/>
                        </div>
                        <div className={classes.addres}>
                            <p>Москва, Путевой проезд 3с1, к 902</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes.policy} ${classes.montserrat}`}>
                <div>
                    <p>©WEBLEX 2022. Все права защищены.</p>
                </div>
                <div className={classes.policyText}><a href="#">Политика конфиденциальности</a></div>
            </div>
        </div>
    );
};

export default Footer;