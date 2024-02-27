//import{useRouter} from "next/router"
import React from "react";
import classes from "../styles/lizenziya.module.css"
import Router from "next/router";
//import { Product } from "../index.js";
import {Layout} from "/components/Layout/Layout.jsx"
//import {products} from "../data/products.ts"

export default function Lisenziya() {
   return (
   <>
   <Layout title={`Ліцензія`}>
   <div className={classes.wrapper}>
    <div className={classes.container_info}>
      <div className={classes.container_imeg}>

      </div>
      <div className={classes.container_text}>
         <h2 className={classes.h2}></h2>
         <p className={classes.p1}></p>
      </div>
    </div>
    <div className={classes.container_info_text}>
      <p className={classes.info_text}></p>
    </div>
    <div className={classes.button_top}>
    <button className={classes.button} onClick={() => Router.push(`/`)}>Вернутись назад</button>
    </div>

   </div>


   </Layout>
   </>
   )
}