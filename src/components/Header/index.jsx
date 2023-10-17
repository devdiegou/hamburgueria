import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import "../../globalStyles.css";
import style from "./header.module.scss"

export const Header = ({ setIsOpen }) => {
   const [value, setValue] = useState("");

   return (
      <>
         <header className={style.header}>
            <div className={style.header__container}>
               <img className={style.logo} src={Logo} alt="Logo Kenzie Burguer" />
               <div className={style.search__container}>
                  <button className={style.cart} onClick={() => setIsOpen(true)} >
                     <MdShoppingCart className={style.cart__img} size={21} />
                     <span>0</span>
                  </button>
                  {/* <form>
                        <input
                           type="text"
                           value={value}
                           onChange={(e) => setValue(e.target.value)}
                        />
                        <button type="submit">
                           <MdSearch size={21} />
                        </button>
                     </form> */}
               </div>
            </div>
         </header>
      </>
   );
};
