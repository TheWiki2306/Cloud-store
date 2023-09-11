import { Container } from "./contact.styles";
import { ReactComponent as twitter } from "../../assets/icons/twitter-svgrepo-com.svg";
import { ReactComponent as linked } from "../../assets/icons/linkedin-fill-svgrepo-com.svg";
import { ReactComponent as github } from "../../assets/icons/logo-github-svgrepo-com.svg";

const Contact: React.FC = () => {
    return(
        <Container>
            <h2>Get the Latest Products from us</h2>
            <h5>Contact us</h5>
        </Container>
    );
}

export default Contact;