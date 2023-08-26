import { useState } from "react";
import { useQuery } from "react-query";
import Drawer from '@material-ui/core/Drawer';
import  LinearProgress  from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import  Badge  from "@material-ui/core/Badge";
import { Wrapper } from "./App.styles";
import CartItem from './components/CartItem/CartItem';

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


function App() {

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ShoppingCartItems[] );

  const { data, isLoading, error } = useQuery<ShoppingCartItems[]>(
    'products',
    getItems
  );
  console.log(data);
  
  const addToCart = (clicked: ShoppingCartItems) => null;

  if(isLoading) 
  return <LinearProgress/>;

  if(error)
  return <div>Error encountered</div>
   
  return (
    <Wrapper>
      <Grid container spacing={3}> 
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}> 
            <CartItem item={item} handleAddToCart={addToCart}/>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
