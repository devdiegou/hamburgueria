import { ProductCard } from "./ProductCard";
import style from "./productList.module.scss";

export const ProductList = ({ productList, addToCart, cartList, setCartList }) => {
   return (
      <ul className={style.ul}>
         {productList.map((product) => (
            <ProductCard
               key={product.id}
               product={product}
               addToCart={addToCart}
               setCartList={setCartList} />
         ))}
      </ul>
   );
};
