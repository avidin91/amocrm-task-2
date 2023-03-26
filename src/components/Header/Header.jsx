import React from 'react';
import classes from './Header.module.css';
import logo from './../../img/logo_welbex.svg';
import telegram from './../../img/icons/telegram.svg';
import phone from './../../img/icons/phone.svg';
import whatsapp from './../../img/icons/whatsapp.svg';

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.logoBlock}>
                <div>
                    <img src={logo} alt="logo" className={classes.logo}/>
                </div>
                <div className={classes.descriptorBlock}>
                    <p className={classes.descriptorFont}>крупный интегратор CRM в России и ещё 8 странах</p>
                </div>
            </div>
            <div className={classes.menuBlock}>
                <div className={classes.menuItemBox}>
                    <p className={classes.menuFont}>Услуги</p>
                </div>
                <div className={classes.menuItemBox}>
                    <p className={classes.menuFont}>Виджеты</p>
                </div>
                <div className={classes.menuItemBox}>
                    <p className={classes.menuFont}>Интеграции</p>
                </div>
                <div className={classes.menuItemBox}>
                    <p className={classes.menuFont}>Кейсы</p>
                </div>
                <div className={`${classes.menuItemBox} ${classes.certificate}`}>
                    <p className={classes.menuFont}>Сертификаты</p>
                </div>
            </div>
            <div className={classes.contactBlock}>
                <div className={classes.phoneBox}>
                    <p className={classes.phoneFont}>+7 555 555-55-55</p>
                </div>
                <div className={classes.contactBlock_callbackBlock}>
                    <div className={classes.tgIconBox}>
                        <img src={telegram} alt="telegram" className={classes.iconTG}/>
                    </div>
                    <div className={classes.phIconBox}>
                        <img src={phone} alt="phone" className={classes.icon}/>
                    </div>
                    <div>
                        <img src={whatsapp} alt="whatsapp" className={classes.icon}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;