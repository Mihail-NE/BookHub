import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../shared/components/Button/Button";

const AnonymousProfile = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[600px] p-8">
            <motion.div
                className="text-center space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-3xl font-bold text-gray-800">
                    Добро пожаловать!
                </h2>
                <p className="text-gray-600 max-w-md mx-auto">
                    Пожалуйста, войдите в систему или зарегестрируйтесь
                </p>

                <div className="flex gap-4 justify-center pt-4">
                    <Link to="/login">
                        <Button type="primary" size="large">
                            Войти
                        </Button>
                    </Link>
                    <Link to="/signup">
                        <Button type="outline" size="large">
                            Регистрация
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default AnonymousProfile;
