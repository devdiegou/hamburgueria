import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./modal.module.scss"

export const CartModal = ({ cartList, removeItem, setIsOpen, removeAll, setCartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={style.modalOverlay} role="dialog">
         <div className={style.modal__header}>
            <h2>Carrinho de compras</h2>
            <button className={style.btn__close} onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
               <MdClose size={21} />
            </button>
         </div>
         <div className={style.items}>
            <ul>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} cartList={cartList} removeItem={removeItem}/>
               ))}
            </ul>
         </div>
         <div className={style.total__div}>
            <div className={style.total__price}>
               <p>Total</p>
               <span className={style.price}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button className={style.btn} onClick={() => setCartList(removeAll)}>Remover todos</button>
         </div>
      </div>
   );
};
