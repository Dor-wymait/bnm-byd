import React from "react";
import classes from "../styles/rabota.module.css"
import Router from "next/router";
import {Layout} from "/components/Layout/Layout.jsx";

export default function Etap() {
   return (
   <>
   <Layout title={`Ключові Етапи`}>
   <div className={classes.wrapper}>
               <div className={classes.container_info}>
                    <h1 className={classes.title_h1}>Ключові Етапи в Деталях</h1>
                    <div className={classes.title_li}>
                    <h4 className={classes.title_h4}>1 - Ознайомлення з об'єктом:</h4>
                    <li className={classes.title_li}>Визначення місцезнаходження об’єкта.</li>
                    <li className={classes.title_li}>Проведення першої оцінки поточного стану.</li>
                    </div>

                    <div className={classes.title_li}>
                    <h4 className={classes.title_h4}>2 - Підготовка пропозиції:</h4>
                    <li className={classes.title_li}>Розробка індивідуального плану гідроізоляції.</li>
                    <li className={classes.title_li}>Оцінка необхідного обсягу матеріалів та ресурсів.</li>
                    </div>

                    <div className={classes.title_li}>
                    <h4 className={classes.title_h4}>3 - Узгодження умов:</h4>
                    <li className={classes.title_li}>Обговорення пропозиції з замовником.</li>
                    <li className={classes.title_li}>Виявлення особливих вимог і побажань.</li>
                    </div>

                    <div className={classes.title_li}>
                    <h4 className={classes.title_h4}>4 - Підписання договору:</h4>
                    <li className={classes.title_li}>Оформлення необхідних юридичних документів.</li>
                    <li className={classes.title_li}>Уточнення строків та бюджету робіт.</li>
                    </div>

                    <div className={classes.title_li}>
                    <h4 className={classes.title_h4}>5 - Мобілізація ресурсів:</h4>
                    <li className={classes.title_li}>Підготовка необхідного обладнання та матеріалів.</li>
                    <li className={classes.title_li}>Формування бригади спеціалістів.</li>
                    </div>

                    <div className={classes.title_li}>
                    <h4 className={classes.title_h4}>6 - Завершення проекту:</h4>
                    <li className={classes.title_li}>Надання всієї необхідної документації.</li>
                    <li className={classes.title_li}>Підписання акта виконаних робіт.</li>
                    </div>



                 </div>

                 <div className={classes.button_top}>
                 <button className={classes.button} onClick={() => Router.push(`/`)}>Вернутись назад</button>
                 </div>


   </div>




   </Layout>
   </>
   )
}