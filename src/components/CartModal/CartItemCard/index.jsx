import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeItem }) => {
   return (
      <li>
         <div>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
         </div>
         <button onClick={() => removeItem(product.id)}  aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
