import { ProductCard } from "./ProductCard";
import style from "./productList.module.scss";

export const ProductList = ({ productList, addToCart, cartList }) => {
   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} cartList={cartList} addToCart={addToCart}/>
         ))}
      </ul>
   );
};
