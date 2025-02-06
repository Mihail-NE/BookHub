import { Link } from "react-router-dom";
import Button from "../../shared/components/Button/Button";

const Hero = () => {
    return (
        <div className="bg-hero bg-cover bg-no-repeat bg-center text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="font-josefin text-5xl font-bold mb-4 mobile:text-3xl">
                    Добро пожаловать в BookHub
                </h1>
                <p className="text-xl mb-8 mobile:text-base">
                    Откройте для себя мир книг и знаний
                </p>
                <Link to="/catalog">
                    <Button size="large">Перейти к каталогу</Button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
