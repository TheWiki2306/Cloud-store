import { Wrapper } from './App.styles';
import { Routes, Route, Link } from 'react-router-dom';
import Products, { ShoppingCartItems } from './components/products/Products';
import Cart from './components/cart/Cart';
import CartItem from './components/CartItem/CartItem';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import GlobalStyles from './components/Global style/Global';
// import Products from './components/products/Products';
import Home from './pages/Home/Home';
import  Badge  from "@material-ui/core/Badge";
import { StyledButton } from './components/products/products.styles';
import { useState } from "react";
import { useQuery } from "react-query";

// import CircularProgress  from "@material-ui/core/CircularProgress";




export default function App() {

  return(
    <Wrapper>
      <GlobalStyles/>
      <nav className='navLink'>
        <Link to='/' className='link'>C-store.</Link>
        <Link to='/cart' className='link'>
        {/* <StyledButton onClick={() => setCartOpen(true)}>
                <Badge badgeContent={fetchTotalItems(cartItems)} color='error'>
                <AddShoppingCartIcon/> 
                </Badge>
            </StyledButton> */}
        </Link>
        {/* <Link to='/cartitems'></Link> */}
      </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart cartItems={[]} addToCart={function (clickedItem: ShoppingCartItems): void {
        } } removeFromCart={function (id: number): void {
        } }/>}/>
        <Route path="/cartitems" element={<CartItem item={{
                  id: 0,
                  category: "",
                  description: "",
                  image: "",
                  price: 0,
                  title: "",
                  amount: 0
              }} handleAddToCart={function (clicked: ShoppingCartItems): void {
              } }/>}/> 
        <Route path='/products' element={<Products/>}/>
    </Routes>
    </Wrapper>
  )
}