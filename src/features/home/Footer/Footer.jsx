const Footer = () => {
    return (
        <footer className="bg-violet-600 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="mb-4">© 2025 MindBooks. Все права защищены.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:text-violet-200">
                        Facebook
                    </a>
                    <a href="#" className="hover:text-violet-200">
                        Twitter
                    </a>
                    <a href="#" className="hover:text-violet-200">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
