import { Link } from "react-router-dom";
import BookCard from "../catalog/BookCad";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Sceleton from "../../shared/components/Sceleton/Sceleton";
import useBooks from "../../shared/hooks/useBooks";

const FeaturedBooks = () => {
    const { books, isLoading, isError } = useBooks();

    return (
        <div className="container mx-auto py-16">
            <div className="text-center mb-16">
                <h2 className="font-josefin text-4xl font-bold text-gray-800 mb-4">
                    Рекомендуемые книги
                </h2>
                <div className="w-24 h-1 bg-violet-500 mx-auto"></div>
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
                {isLoading && <Sceleton />}
                {isError && (
                    <p className="text-center text-red-500">
                        Ошибка при загрузке книг
                    </p>
                )}
                {books?.items?.slice(0, 4).map((book) => (
                    <BookCard
                        key={book.id}
                        id={book.id}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors?.[0]}
                        cover={book.volumeInfo.imageLinks?.thumbnail}
                        price={book.saleInfo.listPrice?.amount}
                        currency={book.saleInfo.listPrice?.currencyCode}
                    />
                ))}
            </div>
            <div className="text-center mt-16">
                <Link to="/catalog">
                    <button className="bg-violet-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-violet-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2">
                        <span>Смотреть все книги</span>
                        <ArrowRightIcon className="w-6 h-6" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedBooks;
