import style from "./card.module.scss"

export const ProductCard = ({ product, addToCart, cartList }) => {
    return(
        <li key={product.id} className={style.card}>
            <div className={style.img__container}>
            <img src={product.img} alt={product.name} />
            </div>
            <div className={style.info__container}>
                <h3>{product.name}</h3>
                <span className={style.category}>{product.category}</span>
                <span className={style.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className={style.btn} onClick={() => addToCart(cartList)}>Adicionar</button>
            </div>
        </li>
    )
}