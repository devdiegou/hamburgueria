import { useEffect, useState } from "react";
import { CartModal, Header, ProductList} from "../../components";
import { api } from "../../services/api";

export const HomePage = () => {
   const [isOpen, setIsOpen] = useState(false)
   const localProduct = localStorage.getItem("@ProductList")
   const [productList, setProductList] = useState(localProduct ? JSON.parse(localProduct) : []);
   const [cartList, setCartList] = useState([]);
   // console.log(productList);

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
      localStorage.setItem("@ProductList", JSON.stringify(productList))
   }, [productList])

   const removeItem = (itemId) => {
      const newItem = cartList.filter(item => item.id !== itemId);
      setCartList(newItem)
   }

   const addToCart = (item) => {
      if (!cartList.some(product => product.id === item.id)) {
         setCartList(item);
      } else {
         alert('Esse item já foi adicionado!')
      }
   }

   // useEffect montagem - carrega os produtos da API e joga em productList; feito
   // useEffect atualização - salva os produtos no localStorage (carregar no estado); fieto
   // adição, exclusão, e exclusão geral do carrinho;
   // renderizações condições e o estado para exibir ou não o carrinho;
   // filtro de busca;
   // estilizar tudo com sass de forma responsiva;

   return (
      <>
         <Header setIsOpen={setIsOpen} />
         <main>
            <div className="container">
               <ProductList productList={productList} cartList={cartList} addToCart={addToCart} />
               {isOpen ? <CartModal setIsOpen={setIsOpen} cartList={cartList} removeItem={removeItem} /> : null}
               
            </div>
         </main>
      </>
   );
};
