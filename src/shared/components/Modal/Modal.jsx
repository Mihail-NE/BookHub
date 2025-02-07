import { useState } from "react";
import { createPortal } from "react-dom";
import LogOut from "../../../features/auth/LogOut";
import Button from "../Button/Button";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg relative max-w-md w-full mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

const Portal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center m-2.5 p-2.5 rounded-lg transition duration-200 relative text-gray-600 hover:bg-violet-100 hover:text-violet-600 cursor-pointer"
        >
            {children}

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="p-8 max-w-md w-full bg-white rounded-xl">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Выход из системы
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Вы точно уверены что хотите выйти?
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Button
                            type="primary"
                            size="large"
                            onClick={() => setIsOpen(false)}
                        >
                            <LogOut />
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Portal;
