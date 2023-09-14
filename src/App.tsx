import { Wrapper } from './App.styles';
import { Routes, Route, Link } from 'react-router-dom';
import Products from './components/products/Products';
import { ShoppingCartItems } from './components/products/Products';
import Cart from './components/cart/Cart';
import CartItem from './components/CartItem/CartItem';
import GlobalStyles from './components/Global style/Global';
import Home from './pages/Home/Home';
import { ThemeProvider } from 'styled-components';



const theme = {
  laptop: '1280px',
  tablet: '1024px',
  mobile: '768px',
  mobileprime: '540'
}

  
export default function App() {
  
  return(
      
    <Wrapper>
      <GlobalStyles/>
      <nav className='navLink'>
        <Link to='/' className='link'>C-store.</Link>
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