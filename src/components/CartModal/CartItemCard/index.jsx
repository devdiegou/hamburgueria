import { MdDelete } from "react-icons/md";
import style from "./cardItem.module.scss";

export const CartItemCard = ({ product, removeItem }) => {
   return (
      <li key={product.id} className={style.item__container}>
         <div className={style.item}>
            <div className={style.img__container}>
               <img src={product.img} alt={product.name} />
            </div>
            <div className={style.info__container}>
               <h3>{product.name}</h3>
               <p>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</p>
            </div>
         <button className={style.delete__btn} onClick={() => removeItem(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
         </div>
      </li>
   );
};
