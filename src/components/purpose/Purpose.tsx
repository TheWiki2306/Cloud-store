import { Container } from "./Purpose.styles";
// import { ShoppingCartItems } from '../../components/products/Products';
import image from '../../assets/images/watch.png';
import { ReactComponent as Truck } from '../../assets/icons/delivery-truck-svgrepo-com.svg';
import {ReactComponent as Award} from '../../assets/icons/medal-award-svgrepo-com.svg';
import { ReactComponent as Support } from '../../assets/icons/support-svgrepo-com.svg';


// export default function Purpose(){
    const Purpose: React.FC = () => {
    return(
    <Container>
        <div>
            <h1>Why Choose Us</h1>
            <img src={image} alt="watch image"  className="image"/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Consequuntur ipsam facere delectus exercitationem sequi.
            </p>
        </div>
        <div className="info">
            <article>
            <Truck className="icon"/>
                <div>
                    <h3>Fast Delivery</h3>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, enim?</small>
                </div>
            </article>
            <article>
                <Award className="icon"/>
                <div>
                    <h3>Fast Delivery</h3>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, enim?</small>
                </div>
            </article>
            <article>
                <Support className="icon"/>
                <div>
                    <h3>Fast Delivery</h3>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, enim?</small>
                </div>
            </article>
        </div>
    </Container>
    )
}

export default Purpose;