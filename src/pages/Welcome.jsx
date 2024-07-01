import WelcomeImage from "../assets/image/welcome-image.png";
import HeroImage from "../assets/image/bg-welcome-image.png";
import { useNavigate } from "react-router-dom";



export default function Welcome() {
    const navigate = useNavigate();
    return (
        <div
            onTouchEnd={() => navigate('/recipes')}
            className="bg-[rgba(0,0,0,0.3), rgba(0,0,0,0.5)),url('./assets/images/bg-welcome.png)] 
            bg-cover bg-center h-screen flex flex-col place-items-center place-content-center" >
            <h3 className="text-white text center text-4x1"> Savory & Sweet</h3>
            <img src={WelcomeImage} alt="Welcome Image" />
        </div>
    );
}