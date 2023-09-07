import { Link } from "react-router-dom";
import { Container } from "./Home.styles";
import Purpose from "../../components/purpose/Purpose";
import Display from "../../components/display/Display";
import ProductCategory from "../../components/product category/ProductCatergory";
import Products from "../../components/products/Products";
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
        </Container>
        
    )
};