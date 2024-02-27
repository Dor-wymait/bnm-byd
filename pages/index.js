import classes from "../styles/Index.module.css";
import React from "react";
import Router from "next/router";
import {Layout} from "../components/Layout/Layout.jsx";


export default function Home () {
  return (
    <>
         <Layout title={`Головна сторінка`}>
     <aside className={classes.grid}>
       <section className={classes.satibar}>
          <a className={classes.sadibar_title} onClick={() => Router.push(`./info/inject-gidro`)}>Ін'єкційна Гідроізоляція</a>
          <a className={classes.sadibar_title} onClick={() => Router.push(`./info/torkret`)}>Торкретування</a>
          <a className={classes.sadibar_title} onClick={() => Router.push(`./info/obmaz-gidro`)}>Обмазувальна Гідроізоляція</a>
          <a className={classes.sadibar_title} onClick={() => Router.push(`./info/shtukatur-gidro`)}>Штукатурна Гідроізоляція</a>
          <a className={classes.sadibar_title} onClick={() => Router.push(`./info/rabota-otboynym-molot`)}>Роботи Відбійним Молотком</a>
          <a className={classes.sadibar_title} onClick={() => Router.push(`./info/almaz-bureniye`)}>Алмазне Буріння</a>
          <a className={classes.sadibar_title} onClick={() => Router.push(`./info/almaz-rezka`)}>Алмазна Різка</a>
          <a className={classes.sadibar_title} onClick={() => Router.push(`/mixtek`)}>Суміш "MIXTEK"</a>
          <a className={classes.sadibar_title} onClick={() => Router.push(`/partners`)}>Партнерські Бренди</a>
          <a className={classes.sadibar_title} onClick={() => Router.push(`./info/for-compani`)}>Про Компанію</a>
          <a className={classes.sadibar_title} onClick={() => Router.push(`./info/etaps`)}>Ключові Етапи</a>
          <a className={classes.sadibar_title} onClick={() => Router.push(`./info/lizenziya`)}>Ліцензія</a>
       </section>
       <section className={classes.animation}>
          <div className={classes.body_card}>
                    <div className={classes.card}>
                        <div className={classes.card_content}>
                            <div className={classes.card_front}>
                                <h2 className={classes.card_title}>ПРО КОМПАНІЮ
                                    «БНМ-БУД-55»
                                </h2>
                            </div>
                            <div className={classes.card_back}>
                                  <p className={classes.card_body}>ТОВ «БНМ-БУД-55» з впевненістю може
                                    заявити про себе високою якістю та  надійністю. Довговічність і
                                    тривалий термін гарантії є неодмінною у виконанні робіт будь-якого
                                    рівня складності на об’єктах різного призначення.
                                  </p>
                                  <p className={classes.card_body}>ТОВ«БНМ-БУД-55» — компанія на ринку, яка у роботі
                                    враховує специфіку навколишнього середовища. Надає гарантії на виконані
                                    нами роботи строком від 5 років! Ми використовуємо в роботі над об’єктом
                                     власну технічну базу та спеціалістів високого рівня підготовки. З
                                    моменту вашої заявки наші спеціалісти виїжджають на об’єкт для
                                    детального вивчення його специфіки, оскільки тільки так можна оцінити
                                    всю складність, не обмежуючись почутим. Ви отримуєте наше комерційне
                                    пропозицію з описом всього спектра необхідних матеріалів та робіт. Маєте
                                     можливість легко спостерігати за проведенням робіт на кожному з їх
                                    етапів до моменту здачі об’єкта. Ми несемо відповідальність за терміни
                                    та якість, надаючи гарантії на об’єкти різного рівня складності,
                                    володіємо досвідом та технічною базою — це те, що вигідно нас відрізняє
                                    на ринку.
                                   </p>
                            </div>
                        </div>
                    </div>
                </div>
       </section>
       <section className={classes.stracshion}>
       <aside className={classes.box_container}>
                    <h2 className={classes.title_container_box}>Ключові Етапи в Деталях</h2>
                  <div className={classes.centeral_container}>
                    <div className={classes.container__card}>
                        <div className={classes.box_noumber}>
                            <h2 className={classes.noumber_title}>1</h2>
                        </div>
                        <div className={classes.box_info}>
                            <ul>
                                <h2 className={classes.info_title}>Ознайомлення з об'єктом:</h2>
                                <li className={classes.info_title}>- Визначення місцезнаходження об’єкта.</li>
                                <li className={classes.info_title}>- Проведення першої оцінки поточного стану.</li>
                            </ul>

                        </div>
                    </div>
                    <div className={classes.container__card}>
                        <div className={classes.box_noumber}>
                            <h2 className={classes.noumber_title}>2</h2>
                        </div>
                        <div className={classes.box_info}>
                            <ul>
                                <h2 className={classes.info_title}>Підготовка пропозиції:</h2>
                                <li className={classes.info_title}>- Розробка індивідуального плану гідроізоляції.</li>
                                <li className={classes.info_title}>- Оцінка необхідного обсягу матеріалів та ресурсів.</li>
                            </ul>

                        </div>
                    </div>
                    <div className={classes.container__card}>
                        <div className={classes.box_noumber}>
                            <h2 className={classes.noumber_title}>3</h2>
                        </div>
                        <div className={classes.box_info}>
                            <ul>
                                <h2 className={classes.info_title}>Узгодження умов:</h2>
                                <li className={classes.info_title}>- Обговорення пропозиції з замовником.</li>
                                <li className={classes.info_title}>- Виявлення особливих вимог і побажань.</li>
                            </ul>

                        </div>
                    </div>
                    <div className={classes.container__card}>
                        <div className={classes.box_noumber}>
                            <h2 className={classes.noumber_title}>4</h2>
                        </div>
                        <div className={classes.box_info}>
                            <ul>
                                <h2 className={classes.info_title}>Підписання договору:</h2>
                                <li className={classes.info_title}>- Оформлення необхідних юридичних документів.</li>
                                <li className={classes.info_title}>- Уточнення строків та бюджету робіт.</li>
                            </ul>

                        </div>
                    </div>
                    <div className={classes.container__card}>
                        <div className={classes.box_noumber}>
                            <h2 className={classes.noumber_title}>5</h2>
                        </div>
                        <div className={classes.box_info}>
                            <ul>
                                <h2 className={classes.info_title}>Мобілізація ресурсів:</h2>
                                <li className={classes.info_title}>- Підготовка необхідного обладнання та матеріалів.</li>
                                <li className={classes.info_title}>- Формування бригади спеціалістів.</li>
                            </ul>

                        </div>
                    </div>
                    <div className={classes.container__card}>
                        <div className={classes.box_noumber}>
                            <h2 className={classes.noumber_title}>6</h2>
                        </div>
                        <div className={classes.box_info}>
                            <ul>
                                <h2 className={classes.info_title}>Завершення проекту:</h2>
                                <li className={classes.info_title}>- Надання всієї необхідної документації.</li>
                                <li className={classes.info_title}>- Підписання акта виконаних робіт.</li>
                            </ul>

                        </div>
                    </div>
                  </div>
          </aside>
        </section>
      </aside>
     </Layout>







    </>
  );
}
