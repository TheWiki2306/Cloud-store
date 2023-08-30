import { Button } from "@material-ui/core";
import { ShoppingCartItems } from "../../App";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./ProductCart.styles";


type Props = {
    item: ShoppingCartItems;
    addToCart: (clickedItem: ShoppingCartItems) => void;
    removeFromCart: (id: number) => void;
}

const ProductCart: React.FC<Props> = ({ item, addToCart, removeFromCart }) => 
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="cartInfo">
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => removeFromCart(item.id)}>
                        -
                    </Button>
            </div>
            <p>{item.amount}</p>
            <div className="buttons">
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => addToCart(item)}>
                        +
                    </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>

export default ProductCart; 