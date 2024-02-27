import classes from "./header.module.css";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Router from "next/router";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const Layout = ({children, title = `Next App`}) => {
    return(
    <>
    <Head >
       <title>Гідроізоляція | {title}</title>
       <meta charSet="UTF-8"/>
       <meta name="description" content="Всі віди гідроізоляція"/>
       <meta name="keywords" content="гидроизоляция, waterflooing, інекційна гідроізоляція"/>
       <meta name="viewport" content="width=device-width, initial-scale=1"/>
       <link rel="icon" href="/logo_title.jpg" />
    </Head>

    <div className={`${classes.wrapper} ${inter.className}`}>
    <header className={classes.header}>
     <div className={classes.header_aside}>
      <section className={classes.header_section}>
        <span className={classes.header_span}>
           <Image
              onClick={() => Router.push(`https://www.google.com/maps/dir//%D0%91%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%BD%D0%BE-%D0%9A%D1%83%D0%B4%D1%80%D1%8F%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F,+%D0%9A%D0%B8%D1%97%D0%B2/@50.9060068,34.792274,15z/data=!4m2!4m1!3e0?hl=uk-UK`)}
              className={classes.header_img}
              src="/maps.png"
              width={25}
              height={25}
              alt="maps"
              priority
           />
           <a className={classes.header_a} href="https://www.google.com/maps/dir//%D0%91%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%BD%D0%BE-%D0%9A%D1%83%D0%B4%D1%80%D1%8F%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F,+%D0%9A%D0%B8%D1%97%D0%B2/@50.9060068,34.792274,15z/data=!4m2!4m1!3e0?hl=uk-UK">
           г.Київ ул.Бульварно-Кудрявська 6 кв.35
           </a>
        </span>
        <span className={classes.header_span}>
            <Image
              onClick={() => Router.push(`tel:+38099051 62 92`)}
              className={classes.header_img}
              src="/telefon.png"
              width={25}
              height={25}
              alt="telefon"
             />
           <a className={classes.header_a} href="tel:+38099051 62 92">
           +38(099)051-62-92
           </a>
         </span>
        </section>
        <section className={classes.header_section}>
           <div className={classes.header_div}>
              <h1 className={classes.header_h1}>"БНМ-БУД-55"</h1>
            </div>
            <div className={classes.header_div}>
              <h1 className={classes.header_h1}> Гідроізоляція</h1>
            </div>
        </section>
      </div>
    </header>
    {children}
    </div>
    </>
    )
}