import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {
    HomeIcon,
    BookOpenIcon,
    ShoppingCartIcon,
    UserIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { DataContext } from "./../context/DataContext";

const Sidebar = () => {
    const { state } = useContext(DataContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`flex flex-col h-screen bg-white shadow-md transition-all duration-300 sticky top-0 ${
                isOpen ? "w-60" : "w-16"
            }`}
        >
            <button
                onClick={toggleSidebar}
                className="p-4 text-gray-500 hover:text-gray-800"
            >
                {isOpen ? (
                    <ChevronLeftIcon className="h-6 w-6" />
                ) : (
                    <ChevronRightIcon className="h-6 w-6" />
                )}
            </button>

            <div className="flex-grow">
            <ul className="mt-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `group flex items-center justify-start m-2.5 p-2.5 rounded-lg transition duration-200 ${
                                    isActive
                                        ? "bg-violet-100 text-violet-600 [&>svg]:text-violet-600"
                                        : "text-gray-600 hover:bg-violet-100 hover:text-violet-600"
                                }`
                            }
                        >
                            <HomeIcon className="h-6 w-6 text-gray-600 transition-colors duration-200 group-hover:text-violet-600" />
                            {isOpen && <span className="ml-4">Главная</span>}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/catalog"
                            className={({ isActive }) =>
                                `group flex items-center justify-start m-2.5 p-2.5 rounded-lg transition duration-200 ${
                                    isActive
                                        ? "bg-violet-100 text-violet-600 [&>svg]:text-violet-600"
                                        : "text-gray-600 hover:bg-violet-100 hover:text-violet-600"
                                }`
                            }
                        >
                            <BookOpenIcon className="h-6 w-6 text-gray-600 transition-colors duration-200 group-hover:text-violet-600" />
                            {isOpen && <span className="ml-4 text-nowrap">Каталог книг</span>}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                `group flex items-center justify-start m-2.5 p-2.5 rounded-lg transition duration-200 relative ${
                                    isActive
                                        ? "bg-violet-100 text-violet-600 [&>svg]:text-violet-600"
                                        : "text-gray-600 hover:bg-violet-100 hover:text-violet-600"
                                }`
                            }
                        >
                            <ShoppingCartIcon className="h-6 w-6 text-gray-600 transition-colors duration-200 group-hover:text-violet-600" />
                            {state.cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-violet-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {state.cart.length}
                                </span>
                            )}
                            {isOpen && <span className="ml-4">Корзина</span>}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `group flex items-center justify-start m-2.5 p-2.5 rounded-lg transition duration-200 ${
                                    isActive
                                        ? "bg-violet-100 text-violet-600 [&>svg]:text-violet-600"
                                        : "text-gray-600 hover:bg-violet-100 hover:text-violet-600"
                                }`
                            }
                        >
                            <UserIcon className="h-6 w-6 text-gray-600 transition-colors duration-200 group-hover:text-violet-600" />
                            {isOpen && <span className="ml-4">Профиль</span>}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
