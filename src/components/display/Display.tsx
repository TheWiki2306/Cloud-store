import { Container } from "./Display.styles";
import { ReactComponent as Flower } from '../../assets/icons/flower-svgrepo-com.svg';


const Display: React.FC = () => {
    return(
        <Container>
            <div>
            <p>40% DISCOUNT!!! <Flower className="icon"/> 40% DISCOUNT!!! <Flower className="icon"/> 40% DISCOUNT!!!</p>
            </div>
        </Container>
    );
}

export default Display;