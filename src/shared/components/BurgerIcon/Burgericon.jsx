const BurgerIcon = ({ isOpen }) => {
    return (
        <div className="cursor-pointer group w-16">
            <div className="relative w-6 h-4">
                <div
                    className={`
                  absolute w-6 h-0.5
                  transition-all duration-300 ease-in-out
                  bg-gray-600 group-hover:bg-violet-500
                  ${isOpen ? "rotate-45 translate-y-1.5 " : "translate-y-0"}
              `}
                ></div>

                <div
                    className={`
                  absolute top-1/2 -translate-y-1/2 w-6 h-0.5
                  transition-all duration-300 ease-in-out
                  bg-gray-600 group-hover:bg-violet-500
                  ${isOpen ? "opacity-0" : "opacity-100"}
              `}
                ></div>

                <div
                    className={`
                  absolute bottom-0 w-6 h-0.5
                  transition-all duration-300 ease-in-out
                  bg-gray-600 group-hover:bg-violet-500
                  ${isOpen ? "-rotate-45 -translate-y-2 " : "translate-y-0"}
              `}
                ></div>
            </div>
        </div>
    );
};

export default BurgerIcon;
