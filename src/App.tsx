import { Wrapper } from './App.styles';
import { Routes, Route, Link } from 'react-router-dom';
import Home, { ShoppingCartItems } from './pages/Home/Home';
import Cart from './components/cart/Cart';
import CartItem from './components/CartItem/CartItem';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import GlobalStyles from './components/Global style/Global';

// import CircularProgress  from "@material-ui/core/CircularProgress";


export default function App() {
  return(
    <Wrapper>
      <GlobalStyles/>
      <nav className='navLink'>
        <Link to='/' className='link'>C-store.</Link>
        <Link to='/cart' className='link'><AddShoppingCartIcon/></Link>
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

    </Routes>
    </Wrapper>
  )
}