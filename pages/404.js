import React from "react";
import Router from "next/router";
import classes from "../styles/Error.module.css";

export default function Error(){
    return (
    <>
    <aside className={classes.wrap}>
          <div className={classes.wrap_center}></div>
         <p className={classes.title_color}>Error</p>
         <p className={classes.title}>404</p>
         <span className={classes.span}></span>
         <p className={classes.title_text}>Данна сторінка не існує</p>
         <a className={classes.title_link} onClick={() => Router.push(`/`)}>Back to Home page</a>
    </aside>
    </>
    );
};