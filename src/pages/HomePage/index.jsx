import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const localProduct = localStorage.getItem("@ProductList")
   const [cartList, setCartList] = useState(localProduct ? JSON.parse(localProduct) : []);

   useEffect(() => {
      const getProducts = async () => {
         try {
            const { data } = await api.get("products");
            setProductList(data)
         } catch (error) {
            alert(error);
         }
      }
      getProducts();
   }, [productList]);

   useEffect(() => {
      localStorage.setItem("@ProductsList", JSON.stringify(productList))
   }, [cartList])

   const addToCart = (item) => {
      if (!cartList.some(product => product.id === item.id)) {
         console.log(item.id)
         setCartList([...cartList, item]);
      } else {
         alert('Esse item já foi adicionado!')
      }
   }

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header />
         <main>
            <div className="container">
               <ProductList productList={productList} cartList={cartList} addToCart={addToCart}/>
               <CartModal cartList={cartList} />
            </div>
         </main>
      </>
   );
};
