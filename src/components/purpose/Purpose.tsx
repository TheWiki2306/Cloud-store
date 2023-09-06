import React from "react";
import { Container } from "./Purpose.styles";
// import { ShoppingCartItems } from '../../components/products/Products';
import image from '../../assets/images/watch.png';



export default function Purpose(){
    return(
    <Container>
        <div>
            <h1>Why Choose Us</h1>
            <img src={image} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Consequuntur ipsam facere delectus exercitationem sequi.
            </p>
        </div>
    </Container>
    )
}
