import ProductCart from "../productCart/ProductCart";
import { Wrapper } from "./Cart.styles";
import { ShoppingCartItems } from "../../App"

type Props = {
    cartItems: ShoppingCartItems[];
    addToCart: (clickedItem: ShoppingCartItems) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {

return (
    <Wrapper>
        <h2>Your products cart</h2>
        {cartItems.length === 0 ? <p>No items in the cart.</p> : null}
        {cartItems.map(item => (
            <ProductCart 
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
        ))}
    </Wrapper>
)
};

export default Cart;
