import { Container } from "./productCategory.styles";
import Products from "../products/Products";

const ProductCategory: React.FC = () => {
    return(
        <Container>
            <h2>Product Category</h2>
            <div className="categories">
                <article>HEADPHONE GADGET</article>
                <article>CLOTHES</article>
                <article>ACCESSORIES</article>
                <article>OTHER ITEMS</article>

            </div>
            <Products/>
        </Container>
    );
}

export default ProductCategory;