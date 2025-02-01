import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon: Icon, text, count }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `group flex items-center m-2.5 p-2.5 rounded-lg transition duration-200 relative ${
                    isActive
                        ? "bg-violet-100 text-violet-600"
                        : "text-gray-600 hover:bg-violet-100 hover:text-violet-600"
                }`
            }
        >
            {({ isActive }) => (
                <>
                    <div className="w-6 min-w-[24px] flex-shrink-0">
                        <Icon
                            className={`h-6 w-6 transition-colors duration-200 ${
                                isActive
                                    ? "text-violet-600"
                                    : "text-gray-600 group-hover:text-violet-600"
                            }`}
                        />
                    </div>
                    {text && (
                        <span className="ml-4 whitespace-nowrap">{text}</span>
                    )}
                    {count > 0 && (
                        <span className="absolute -top-2 -right-2 bg-violet-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {count}
                        </span>
                    )}
                </>
            )}
        </NavLink>
    );
};

export default NavItem;
