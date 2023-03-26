import React from 'react';
import classes from './Content.module.css';

const Content = () => {
    return (
        <div className={classes.content}>
            <div className={classes.headlineBlock}>
                <div>
                    <p className={`${classes.headlineFont} ${classes.inter}`}>Зарабатывайте больше</p>
                </div>
                <div>
                    <p className={`${classes.logoFont} ${classes.inter}`}>с WELBEX</p>
                </div>
                <div>
                    <p className={`${classes.pointMakeMoneyFont} ${classes.montserrat}`}>Развиваем и контролируем продажи за вас</p>
                </div>
            </div>
            <div className={classes.giftBlock}>
                <div className={classes.whatWeGiftBox}>
                    <p className={`${classes.inter} ${classes.whatWeGiftFont}`}>Вместе с <span>БЕСПЛАТНОЙ</span> <span>КОНСУЛЬТАЦИЕЙ</span> мы дарим:</p>
                </div>
                <div className={classes.giftItems}>
                    <div className={classes.giftItemsColumnBox1}>
                        <div className={classes.giftItemBox}>
                            <p className={`${classes.inter} ${classes.giftItemHeadlineFont}`}>ВИДЖЕТЫ</p>
                            <p className={`${classes.montserrat} ${classes.giftItemPointDescriptionFont}`}>30 готовых решений</p>
                        </div>
                        <div className={`${classes.giftItemBox} ${classes.giftItemBoxBottom}`}>
                            <p className={`${classes.inter} ${classes.giftItemHeadlineFont}`}>SKYPE АУДИТ</p>
                            <p className={`${classes.montserrat} ${classes.giftItemPointDescriptionFont}`}>отдела продаж и CRM системы</p>
                        </div>

                    </div>
                    <div className={classes.giftItemsColumnBox2}>
                        <div className={classes.giftItemBox}>
                            <p className={`${classes.inter} ${classes.giftItemHeadlineFont}`}>DASHBOARD</p>
                            <p className={`${classes.montserrat} ${classes.giftItemPointDescriptionFont}`}>с показателями
                                вашего бизнеса</p>
                        </div>
                        <div className={`${classes.giftItemBox} ${classes.giftItemBoxBottom}`}>
                            <p className={`${classes.inter} ${classes.giftItemHeadlineFont}`}>35 ДНЕЙ</p>
                            <p className={`${classes.montserrat} ${classes.giftItemPointDescriptionFont}`}>использования CRM</p>
                        </div>
                    </div>
                </div>
                {/*Версия для адаптации - можно вынести в отдельную компоненту.*/}
                <div className={classes.mobileItems}>

                    <div className={classes.mobileItemColumn1}>
                        <div className={classes.mobileItem}><span>—</span><p>SKYPE АУДИТ</p></div>
                        <div className={`${classes.mobileItem} ${classes.mobileItemDown}`}><span>—</span><p>DASHBOARD</p></div>
                    </div>
                    <div className={classes.mobileItemColumn2}>
                        <div className={classes.mobileItem}><span>—</span><p>30 ВИДЖЕТОВ</p></div>
                        <div className={`${classes.mobileItem} ${classes.mobileItemDown}`}><span>—</span><p>МЕСЯЦ AMOCRM</p></div>
                    </div>
                    <div className={classes.ball1}></div>
                    <div className={classes.ball2}></div>
                    <div className={classes.ball3}></div>
                    <div className={classes.ball4}></div>
                </div>
                <div className={`${classes.button}`}>
                    <p className={`${classes.inter} ${classes.buttonFont}`}>Получить консультацию</p>
                </div>
            </div>
        </div>
    );
};

export default Content;