import { useState, useContext } from "react";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ArrowLeftEndOnRectangleIcon,
    ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { DataContext } from "../shared/context/DataContext";
import { useAuthContext } from "../shared/context/AuthContext";
import Portal from "../shared/components/Modal/Modal";
import NavItem from "./../features/nav/NavItem";
import { getNavItems } from "../features/nav/GetNavItems";

const Sidebar = () => {
    const { user } = useAuthContext();
    const { state } = useContext(DataContext);
    const [isOpen, setIsOpen] = useState(false);
    const navItems = getNavItems(state);

    return (
        <div
            className={`flex flex-col h-screen bg-white shadow-md transition-all duration-300 sticky top-0 overflow-hidden ${
                isOpen ? "w-60" : "w-16"
            }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 text-gray-500 hover:text-gray-800"
            >
                <div className="w-6 min-w-[24px]">
                    {isOpen ? (
                        <ChevronLeftIcon className="h-6 w-6" />
                    ) : (
                        <ChevronRightIcon className="h-6 w-6" />
                    )}
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
                                    <span className="ml-4">{item.text}</span>
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
                    <Portal className="group flex items-center m-2.5 p-2.5 mb-3 rounded-lg transition duration-200 text-gray-600 hover:bg-violet-100 hover:text-violet-600">
                        <div className="w-6 min-w-[24px]">
                            <ArrowLeftStartOnRectangleIcon className="h-6 w-6 text-gray-600 transition-colors duration-200 group-hover:text-violet-600" />
                        </div>
                        {isOpen && <span className="ml-4">Выйти</span>}
                    </Portal>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
