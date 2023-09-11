import { Container } from "./reviews.styles";
import img1 from '../../assets/images/img_1.jpeg';
import img2 from '../../assets/images/img_2.jpeg';
import img3 from '../../assets/images/img_3.jpg'; 
import { ShoppingCartItems } from "../products/Products";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


type Props = {
    id: ShoppingCartItems;
    image: ShoppingCartItems;
    title: ShoppingCartItems;
    description: ShoppingCartItems;
    custname: string;
}

const ReviewData = [
    {
        id: 1,
        image: img1,
        title: 'Uncommon Experience',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, maiores distinctio. Quam assumenda distinctio possimus ratione quos optio cupiditate tenetur!',
        custname: 'Charles Darwin',
    },

    {
        id: 2,
        image: img2,
        title: 'I recommend this app',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, maiores distinctio. Quam assumenda distinctio possimus ratione quos optio cupiditate tenetur!',
        custname: 'Brusells will',
    },

    {
        id: 3,
        image: img3,
        title: 'It is a great app',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, maiores distinctio. Quam assumenda distinctio possimus ratione quos optio cupiditate tenetur!',
        custname: 'Mike Allen',
    },
]

// export default function Reviews(){
 const Reviews: React.FC<Props> = ({}) =>{

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return(
        <Container>
            <h2>Our Customer Say</h2>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, perspiciatis!</p> */}

            <Slider className="reviewsContainer" {...sliderSettings}>
                {
                    
                    ReviewData.map(({ id, image, title, description, custname}) => {
                        return (
                            <div className="info">
                                <article key={id}>
                                    <h4>{title}</h4>
                                    <small>
                                        {description}
                                    </small>
                                    <div className="profile">
                                        <img src={image} alt="" />
                                        <h5>{custname}</h5>
                                    </div>
                                </article>

                                
                                {/* <div>
                                    <img src={img1} alt="" />
                                </div> */}
                             </div>
                  )  })
                
                  }

            </Slider>
        </Container>
    );
}

export default Reviews;