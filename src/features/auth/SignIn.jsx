import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const SignIn = () => {
    return (
        <div className="w-[500px] mx-auto p-12 rounded-xl border border-gray-200 mt-20">
            <h1 className="text-center font-bold text-4xl text-gray-800">
                Вход в аккаунт
            </h1>
            <p className="text-center mt-5 text-gray-600">
                Используйте свой адрес электронной почты для входа в аккаунт
            </p>
            <GoogleAuth />
            <div className="flex items-center mt-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-4 text-gray-500">Или</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <form className="flex flex-col gap-4 mt-5">
                <div className="flex flex-col gap-2 ">
                    <label htmlFor="email" className="text-gray-800 text-lg">
                        Email
                    </label>
                    <input
                        className="w-full px-4 py-3 text-gray-700 text-base bg-white border border-gray-300 rounded-lg placeholder-gray-400 transition-all duration-200focus:outline-none focus:border-violet-400  hover:border-violet-400 outline-none"
                        id="email"
                        type="email"
                        placeholder="example@mail.com"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2 ">
                    <label htmlFor="password" className="text-gray-800 text-lg">
                        Password
                    </label>
                    <input
                        className="w-full px-4 py-3 text-gray-700 text-base bg-white border border-gray-300 rounded-lg placeholder-gray-400 transition-all duration-200focus:outline-none focus:border-violet-400  hover:border-violet-400 outline-none"
                        id="password"
                        type="password"
                        placeholder="Password"
                        required
                        minLength={6}
                    />
                </div>

                <button
                    type="submit"
                    className="flex items-center justify-center mt-6 w-full gap-3 px-4 py-3 bg-violet-500 text-white rounded-lg text-lg  hover:bg-purple-600 hover:border-purple-400 transition-all duration-200"
                >
                    Войти
                </button>
            </form>
            <div className="mt-6 text-center text-gray-500">
                <span>
                    Нет аккаунта?{" "}
                    <Link to="/signup">
                        <span className="text-gray-800 hover:underline">
                            Зарегистрироваться
                        </span>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SignIn;
