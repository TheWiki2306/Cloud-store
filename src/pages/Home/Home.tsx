import { Link } from "react-router-dom";
import { Container } from "./Home.styles";
import Purpose from "../../components/purpose/Purpose";
import Display from "../../components/display/Display";
import ProductCategory from "../../components/product category/ProductCatergory";
import Products from "../../components/products/Products";
import Reviews from "../../components/reviews/Reviews";
import Contact from "../../components/contact/Contact";

// import Paper from '@material-ui/core/Paper';
// import Image from '../../assets/images/watch.png';
// import { styled } from "@mui/system";
// import  Box  from "@material-ui/core/Box";


export default function Home(){ 

    return(
        <Container>
            
        <div className="sectionOne">
            <h2>Our Best</h2>
            <h2><span>Collections</span> Just For You.</h2>
            {/* <Link to='/cartitems'>Start Shopping</Link> */}
            {/* <Link to='/products'>products are here</Link>  */}
        </div>
        <Display/>
        <Purpose/>
        <ProductCategory/>
        <Reviews id={{
                id: 0,
                category: "",
                description: "",
                image: "",
                price: 0,
                title: "",
                amount: 0
            }} image={{
                id: 0,
                category: "",
                description: "",
                image: "",
                price: 0,
                title: "",
                amount: 0
            }} title={{
                id: 0,
                category: "",
                description: "",
                image: "",
                price: 0,
                title: "",
                amount: 0
            }} description={{
                id: 0,
                category: "",
                description: "",
                image: "",
                price: 0,
                title: "",
                amount: 0
            }} custname={""}/>
            <Contact/>
        </Container>
        
    )
};