import WelcomeImage from "../assets/image/welcome-image.png";



export default function Welcome (){
    return (
            <div>
                <h3>Savory & Sweet </h3>
                <img src={WelcomeImage} alt="Welcome Image" />
            </div>
    );
}