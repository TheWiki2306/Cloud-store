import { Container, StyledButton } from "./products.styles";
import { useState } from "react";
import { useQuery } from "react-query";
import Drawer from '@material-ui/core/Drawer';
import  LinearProgress  from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import  Badge  from "@material-ui/core/Badge";
// import { Container, StyledButton } from "./Home.styles";
// import CartItem from './components/CartItem/CartItem';
import CartItem from "../../components/CartItem/CartItem";
// import Cart from "./components/cart/Cart";
import Cart from "../../components/cart/Cart";



//types
export type ShoppingCartItems =  {
    id: number;
    category: string;
    description: string; 
    image: string;
    price: number;
    title: string;
    amount: number; 
  
  }
  
  const getItems = async (): Promise<ShoppingCartItems[]> => 
    await(await fetch('https://fakestoreapi.com/products')).json();
  
  
  export default function Products() {
  
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as ShoppingCartItems[] );
    const { data, isLoading, error } = useQuery<ShoppingCartItems[]>(
      'products',
      getItems
    );
    console.log(data);
    
    const addToCart = (clickedItem: ShoppingCartItems) => {
      setCartItems(previous => {
        const isItemInCart = previous.find(item => item.id === clickedItem.id)
  
        if (isItemInCart){
          return previous.map(item => 
            item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item);
        }
  
        return[...previous, {...clickedItem, amount: 1}]
      })
    };
  
    const handleRemoveFromCart = (id: number) => {
      setCartItems(previous => (
        previous.reduce((itms, item) => {
          if(item.id === id) {
            if(item.amount === 1) return itms;
            return [...itms, {...item, amount: item.amount -1}];
          }
          else{
            return [...itms, item];
          } 
        }, [] as ShoppingCartItems[])  
      ))
    }
  
    const fetchTotalItems = (items: ShoppingCartItems[]) => 
      items.reduce((itms: number, item) =>  itms + item.amount, 0);
    
  
    if(isLoading) 
    return <LinearProgress/>;
  
    if(error)
    return <div>Error encountered</div>


    return (
        <Container>
            <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart 
                cartItems={cartItems}
                addToCart={addToCart} 
                removeFromCart={handleRemoveFromCart}
                /> 
            </Drawer> 
            {/* <StyledButton onClick={() => setCartOpen(true)}>
                <Badge badgeContent={fetchTotalItems(cartItems)} color='error'>
                <AddShoppingCartIcon/> 
                </Badge>
            </StyledButton> */}
            {/* <Grid style={{}} container spacing={3}> 
                {data?.map((item) => (
                <Grid item key={item.id} xs={12} sm={4}> 
                    <CartItem item={item} handleAddToCart={addToCart}/>
            </Grid>
        ))}
    </Grid> */}
    <div className="itemsContainer">
      {
        data?.map((item) => (
        <CartItem item={item} handleAddToCart={addToCart}/>

        ))
      }
  </div>

        </Container>
    );
}