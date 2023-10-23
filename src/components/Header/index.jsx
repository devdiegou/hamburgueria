import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import "../../globalStyles.css";
import style from "./header.module.scss";
import { toast } from "react-toastify";

export const Header = ({ setIsOpen, cartList }) => {
   return (
      <>
         <header className={style.header}>
            <div className={style.header__container}>
               <img className={style.logo} src={Logo} alt="Logo Kenzie Burguer" />
               <div className={style.search__container}>
                  <button className={style.cart} onClick={() => setIsOpen(true)} >
                     <MdShoppingCart className={style.cart__img} size={21} />
                  </button>
                  <span>{cartList.length}</span>
               </div>
            </div>
         </header>
      </>
   );
};
