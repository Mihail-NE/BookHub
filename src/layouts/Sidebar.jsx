import { useState } from "react";
import { Link } from "react-router-dom";
import {
    HomeIcon,
    ChartPieIcon,
    TrashIcon,
    UsersIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleAnalytics = () => {
        setIsAnalyticsOpen(!isAnalyticsOpen);
    };

    return (
        <div
            className={`flex flex-col h-screen bg-white shadow-md transition-all duration-300 ${
                isOpen ? "w-64" : "w-16"
            }`}
        >
            {/* Toggle Button */}
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

            {/* Main Menu */}
            <div className="flex-grow">
                <ul className="mt-4 space-y-2">
                    <li>
                        <Link
                            to="/"
                            className="flex items-center justify-center p-4 text-gray-600 hover:bg-gray-100 transition duration-200"
                        >
                            <HomeIcon className="h-6 w-6" />
                            {isOpen && <span className="ml-4">Dashboard</span>}
                        </Link>
                    </li>
                    <li>
                        <div
                            className="flex items-center justify-center p-4 text-gray-600 hover:bg-gray-100 transition duration-200 cursor-pointer"
                            onClick={toggleAnalytics}
                        >
                            <ChartPieIcon className="h-6 w-6" />
                            {isOpen && (
                                <span className="ml-4 flex-grow">Analytics</span>
                            )}
                            {isOpen && (
                                <ChevronRightIcon
                                    className={`h-4 w-4 transition-transform duration-300 ${
                                        isAnalyticsOpen ? "rotate-90" : ""
                                    }`}
                                />
                            )}
                        </div>
                        {isOpen && isAnalyticsOpen && (
                            <ul className="ml-10 space-y-1">
                                <li>
                                    <Link
                                        to="/analytics/overview"
                                        className="block p-2 text-sm text-gray-600 hover:bg-gray-100"
                                    >
                                        Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/analytics/transactions"
                                        className="block p-2 text-sm text-gray-600 hover:bg-gray-100"
                                    >
                                        Transactions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/analytics/viewers"
                                        className="block p-2 text-sm text-gray-600 hover:bg-gray-100"
                                    >
                                        Viewers
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link
                            to="/trash"
                            className="flex items-center justify-center p-4 text-gray-600 hover:bg-gray-100 transition duration-200"
                        >
                            <TrashIcon className="h-6 w-6" />
                            {isOpen && <span className="ml-4">Trash</span>}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/users"
                            className="flex items-center justify-center p-4 text-gray-600 hover:bg-gray-100 transition duration-200"
                        >
                            <UsersIcon className="h-6 w-6" />
                            {isOpen && <span className="ml-4">Users</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
