import { useState } from "react";
import { useQuery } from "react-query";
import Drawer from '@material-ui/core/Drawer';
import  LinearProgress  from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import  Badge  from "@material-ui/core/Badge";
import { Wrapper } from "./App.styles";

//types
export type ShoppingCartItems = () =>  {
  id: number;
  category: string;
  descripion: string;
  image: string;
  price: number;
  title: string;
  amount: number; 

}

const getItems = async (): Promise<ShoppingCartItems[]> => 
  await(await fetch('https://fakestoreapi.com/products')).json();


function App() {
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
    <div className="App">
      start      
    </div>
  );
}

export default App;
