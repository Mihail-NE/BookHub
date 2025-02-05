import {
    BookOpenIcon,
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-violet-700 via-violet-600 to-purple-600 text-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <BookOpenIcon className="h-8 w-8" />
                            <span className="text-2xl font-bold">
                                BookHub
                            </span>
                        </div>
                        <p className="text-violet-200">
                            Откройте мир знаний вместе с нами
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Контакты</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <PhoneIcon className="h-5 w-5" />
                                <span>+7 (999) 123-45-67</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <EnvelopeIcon className="h-5 w-5" />
                                <span>info@mindbooks.ru</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPinIcon className="h-5 w-5" />
                                <span>г. Москва, ул. Книжная, 42</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Навигация
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-violet-200 transition-colors"
                                >
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-violet-200 transition-colors"
                                >
                                    Каталог
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-violet-200 transition-colors"
                                >
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-violet-200 transition-colors"
                                >
                                    Доставка
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Подпишитесь на новости
                        </h3>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="px-4 py-2 rounded bg-violet-800 text-white placeholder-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
                            />
                            <button className="px-4 py-2 bg-violet-500 rounded hover:bg-violet-400 transition-colors">
                                OK
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-violet-500 mt-12 pt-8 text-center text-violet-200">
                    <p>© 2025 MindBooks. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
