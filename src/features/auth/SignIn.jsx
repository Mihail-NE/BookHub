import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { useAuth } from "../../shared/hooks/useAuth";
import LoadingButton from "./LoadingButton";

const SignIn = () => {
    const {
        loading,
        email,
        setEmail,
        password,
        setPassword,
        error,
        handleSignIn,
    } = useAuth();

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

            {error && <p className="text-red-500 text-center my-2">{error}</p>}

            <form onSubmit={handleSignIn} className="flex flex-col gap-4 mt-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-gray-800 text-lg">
                        Email
                    </label>
                    <input
                        className="w-full px-4 py-3 text-gray-700 text-base bg-white border border-gray-300 rounded-lg placeholder-gray-400 transition-all duration-200focus:outline-none focus:border-violet-400  hover:border-violet-400 outline-none"
                        id="email"
                        type="email"
                        placeholder="example@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-gray-800 text-lg">
                        Password
                    </label>
                    <input
                        className="w-full px-4 py-3 text-gray-700 text-base bg-white border border-gray-300 rounded-lg placeholder-gray-400 transition-all duration-200focus:outline-none focus:border-violet-400  hover:border-violet-400 outline-none"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                    />
                </div>

                <LoadingButton loading={loading}>Войти</LoadingButton>
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
