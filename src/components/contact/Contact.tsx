import { Container } from "./contact.styles";
import { ReactComponent as Twitter } from "../../assets/icons/twitter-svgrepo-com.svg";
import { ReactComponent as Linked } from "../../assets/icons/linkedin-fill-svgrepo-com.svg";
import { ReactComponent as Github } from "../../assets/icons/logo-github-svgrepo-com.svg";

const Contact: React.FC = () => {
    return(
        <Container>
            <h2>Get the Latest Products from us</h2>
            <h5>Contact Us</h5>
            <p> ______________________________________________________________________________________________________</p>
            <div className="links">
                <a href="https://twitter.com/TheAfrowiki"><Twitter className="socials"/></a>
                <a href="https://www.linkedin.com/in/olusegun-olusakin-46641123a/"><Linked className="socials"/></a>
                <a href="https://github.com/thewiki2306"><Github className="socials"/></a>
            </div>
        </Container>
    );
}

export default Contact;