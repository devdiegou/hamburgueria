import { useEffect, useState } from "react";
import { CartModal, Header, ProductList } from "../../components";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const HomePage = () => {
   const [isOpen, setIsOpen] = useState(false);
   
   const localProduct = localStorage.getItem("@ProductList");
   const [productList, setProductList] = useState(localProduct ? JSON.parse(localProduct) : []);
   
   const localCart = localStorage.getItem("@CartList");
   const [cartList, setCartList] = useState(localCart ? JSON.parse(localCart) : []);

   useEffect(() => {
      const getProducts = async () => {
         try {
            const { data } = await api.get("products");
            setProductList(data);
         } catch (error) {
            toast.error(error);
         }
      }
      getProducts();
   }, []);

   useEffect(() => {
      localStorage.setItem("@ProductList", JSON.stringify(productList));
   }, [productList]);

   useEffect(() => {
      localStorage.setItem("@CartList", JSON.stringify(cartList));
   }, [cartList]);

   const removeItem = (itemId) => {
      const newItem = cartList.filter(item => item.id !== itemId);
      setCartList(newItem);
   }

   const addToCart = (itemToAdd) => {
      if(!cartList.some(item => item.id === itemToAdd.id)) {
         setCartList([...cartList, itemToAdd]);
      } else {
         toast.error("Este item já foi adicionado!");
      }
   }

   const removeAll = () => {
      setCartList([]);
   }

   return (
      <>
         <Header setIsOpen={setIsOpen} toast={toast} cartList={cartList} />
         <main>
            <div className="container">
               <ProductList
                  productList={productList}
                  cartList={cartList}
                  addToCart={addToCart}
                  setCartList={setCartList} />
               {isOpen ? <CartModal
                  setIsOpen={setIsOpen}
                  cartList={cartList}
                  setCartList={setCartList}
                  removeAll={removeAll}
                  removeItem={removeItem} /> : null}
            </div>
         </main>
      </>
   );
};
