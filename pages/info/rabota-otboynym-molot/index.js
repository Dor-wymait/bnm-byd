import React, { useState } from "react";
import classes from "../styles/rezka.module.css"
import Router from "next/router";
import {Layout} from "/components/Layout/Layout.jsx"
import Image from "next/image";

export default function Molot() {
  const [details, setDetails] = useState(false);
  const btnClassName = details ? classes.button_b : classes.button;
   return (
   <>
   <Layout title={`Роботи Відбійним Молотком`}>
   <div className={classes.wrapper}>
    <div className={classes.container_wrapp}>


     <div className={classes.container_info}>
       <div className={classes.container_image}>
        <Image
        className={classes.image}
         src="/images/image_slaider/rabota_otboynym_molot.png"
         width={500}
         height={350}
         alt="molot"
         priority
         />
      </div>
      <div className={classes.container_text}>
         <h2 className={classes.h2}>Роботи Відбійним Молотком</h2>
         <p className={classes.p1}>Роботи відбійним молотком - невід'ємна частина будівництва та ремонту. Відбійний молоток використовується для демонтажу та підготовки поверхонь перед гідроізоляцією. Наші досвідчені фахівці ефективно виконають роботи відбійним молотком, забезпечуючи надійну підготовку для гідроізоляційних проектів.
         </p>
      </div>
    </div>

    <div className={classes.container_btn}>
        <div className={classes.button_container}>
             <button className={btnClassName} onClick={() => (setDetails (prev => !prev))}>
               {details ? "Закрити Опис" : "Детальніший Опис"}
             </button>
        </div>
        <div className={classes.button_container}>
              <button className={classes.button} >Заказати Послугу</button>
        </div>
     </div>


  <div>
     {details &&<div className={classes.container_info_text}>
      <nav className={classes.nav}>


      </nav>

      <div className={classes.container_btn}>
       <div className={classes.button_container}>
           <button className={btnClassName} onClick={() => (setDetails (prev => !prev))}>
           Закрити Опис
           </button>
       </div>
       <div className={classes.button_container}>
           <button className={classes.button} >Заказати Послугу</button>
       </div>
      </div>


    </div>}


  </div>
  <div className={classes.button_top}>
  <button className={classes.button} onClick={() => Router.push(`/`)}>Вернутись назад</button>
  </div>

    </div>

   </div>


   </Layout>
   </>
   )
}