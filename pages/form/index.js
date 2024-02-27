import React, {Component}from "react";
//import { render}  from "react-dom";
import classes from "./Form.module.css"
import Router from "next/router";



export default class Form extends Component  {
    state ={
        inputName:"",
        inputPhone:"",
        textareaText:"",
    }
    handleNameChange =({target: {value}}) =>{
        this.setState({
            inputName: value,

        })
    }
    handlePhoneChange =({target: {value}}) =>{
        this.setState({
            inputPhone: value,

        })
    }
     handleTextChange =({target: {value}}) =>{
          this.setState({

            textareaText: value
         })

    }
    render() {
        const{inputName, inputPhone, textareaText} = this.state;
    return(
    <>
 <section className={classes.wrapper}>
      <div className={classes.center}>
                 <div className={classes.btn_closed}>
                    <button  className={classes.btn_x} onClick={() => Router.push(`/`)}>X</button>
                </div>
        <div className={classes.container}>
                    <h2 className={classes.h2}>Заявочна форма</h2>
            <form className={classes.form} controlId="formBasicName">
                    <input className={classes.input} value={inputName} onChange={this.handleNameChange} name="name" placeholder="Введіть ім'я" autocomplete="off"/>
             </form>
             <form className={classes.form} controlId="formBasicTelefon">
                    <input className={classes.input} value={inputPhone} onChange={this.handlePhoneChange} name="phone" placeholder="Введіть номер телефона" autocomplete="off"/>
             </form>
             <form className={classes.form} controlId="formBasicText">
                    <textarea className={classes.input} value={textareaText} onChange={this.handleTextChange} id="text" name="text" placeholder="Введіть опис" rows="3" autocomplete="off"/>
              </form>
                <button className={classes.btn_masege} onClick={() => Router.push(`/`)} type="submit" class="btn-masege ">Відправить заявку</button>
        </div>
      </div>
 </section>




    </>
    )
  }
}
