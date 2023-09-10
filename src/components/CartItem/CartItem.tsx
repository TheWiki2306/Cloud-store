import Button from '@material-ui/core/Button';
// import { ShoppingCartItems } from '../../App';
import { ShoppingCartItems } from '../../components/products/Products';
import { Wrapper } from './cartItem.styles';


type Props = {
    item: ShoppingCartItems;
    handleAddToCart: (clicked: ShoppingCartItems) => void;
}

 const CartItem: React.FC<Props>  = ({ item, handleAddToCart}) => (
    <Wrapper>
        <div className='wrapper'>
            <img src={item.image} alt={item.title}/>
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>  
            </div>
                <Button onClick={() => handleAddToCart(item)}><p className='add'> Add to cart</p></Button>
        </div>
    </Wrapper>
 )

 export default CartItem;