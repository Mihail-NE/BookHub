import { useState, useContext } from "react";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { DataContext } from "../shared/context/DataContext";
import { useAuthContext } from "../shared/context/AuthContext";
import Portal from "../shared/components/Modal/Modal";
import NavItem from "./../features/nav/NavItem";
import BurgerIcon from "../shared/components/BurgerIcon/Burgericon";
import { getNavItems } from "../features/nav/GetNavItems";

const Sidebar = () => {
    const { user } = useAuthContext();
    const { state } = useContext(DataContext);
    const [isOpen, setIsOpen] = useState(false);
    const navItems = getNavItems(state);

    return (
        <>
            {/* Мобильная версия - выдвижное меню сверху */}
            <div className="xl:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50">
                <div className="flex justify-between items-center p-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        <BurgerIcon isOpen={isOpen} className="h-6 w-6" />
                    </button>
                </div>

                <div
                    className={`absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${
                        isOpen ? "max-h-screen" : "max-h-0"
                    } overflow-hidden`}
                >
                    <div className="p-4">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.to}
                                {...item}
                                text={<span className="ml-4">{item.text}</span>}
                            />
                        ))}

                        {!user ? (
                            <NavItem
                                to="/signup"
                                icon={ArrowLeftEndOnRectangleIcon}
                                text={<span className="ml-4">Войти</span>}
                            />
                        ) : (
                            <Portal>
                                <div className="w-6 min-w-[24px] flex-shrink-0">
                                    <ArrowLeftEndOnRectangleIcon className="h-6 w-6 transition-colors duration-200 text-gray-600 group-hover:text-violet-600" />
                                </div>

                                <span className="ml-8 whitespace-nowrap">
                                    Выйти
                                </span>
                            </Portal>
                        )}
                    </div>
                </div>
            </div>

            <div
                className={`hidden xl:flex flex-col h-screen bg-white shadow-md transition-all duration-300 sticky top-0 overflow-hidden ${
                    isOpen ? "w-60" : "w-16"
                }`}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-4 text-gray-500 hover:text-gray-800"
                >
                    <div className="w-6 min-w-[24px]">
                        <BurgerIcon isOpen={isOpen} className="h-6 w-6" />
                    </div>
                </button>

                <div className="flex-grow justify-between flex flex-col">
                    <div className="mt-4">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.to}
                                {...item}
                                text={
                                    isOpen && (
                                        <span className="ml-4">
                                            {item.text}
                                        </span>
                                    )
                                }
                            />
                        ))}
                    </div>

                    {!user ? (
                        <NavItem
                            to="/signup"
                            icon={ArrowLeftEndOnRectangleIcon}
                            text={isOpen && <span className="ml-4">Войти</span>}
                        />
                    ) : (
                        <Portal>
                            <div className="w-6 min-w-[24px] flex-shrink-0">
                                <ArrowLeftEndOnRectangleIcon className="h-6 w-6 transition-colors duration-200 text-gray-600 group-hover:text-violet-600" />
                            </div>

                            {isOpen && (
                                <span className="ml-4 whitespace-nowrap">
                                    Выйти
                                </span>
                            )}
                        </Portal>
                    )}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
