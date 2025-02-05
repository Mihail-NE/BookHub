import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="bg-hero bg-cover bg-no-repeat bg-center text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="font-josefin text-5xl font-bold mb-4">
                    Добро пожаловать в BookHub
                </h1>
                <p className="text-xl mb-8">
                    Откройте для себя мир книг и знаний
                </p>
                <Link to="/catalog">
                    <button className="bg-white text-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                        Перейти к каталогу
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
