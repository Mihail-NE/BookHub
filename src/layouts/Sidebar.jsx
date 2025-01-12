import { useState } from "react";
import { Link } from "react-router-dom";
import {
    HomeIcon,
    BookOpenIcon,
    ShoppingCartIcon,
    UserIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ open = false}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        open = !open;
    };

    return (
        <div
            className={`flex flex-col h-screen bg-white shadow-md transition-all duration-300 fixed ${
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
                        <Link to="/" className="sidebar-link">
                            <HomeIcon className="sidebar-icon" />
                            {isOpen && <span className="ml-4">Главная</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/catalog" className="sidebar-link">
                            <BookOpenIcon className="sidebar-icon" />
                            {isOpen && (
                                <span className="ml-4 text-nowrap">Каталог книг</span>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="sidebar-link">
                            <ShoppingCartIcon className="sidebar-icon" />
                            {isOpen && <span className="ml-4">Корзина</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="sidebar-link">
                            <UserIcon className="sidebar-icon" />
                            {isOpen && <span className="ml-4">Профиль</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
