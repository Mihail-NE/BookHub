import { useParams } from "react-router-dom";
import { useContext } from "react";
import useBooks from "../../shared/hooks/useBooks";
import { DataContext } from "../../shared/context/DataContext";
import Button from "../../shared/components/Button/Button";

const BookInfo = () => {
    const { id } = useParams();
    const { books } = useBooks();
    const { dispatch } = useContext(DataContext);
    const book = books?.items?.find((book) => book.id === id);

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id: book.id,
                title: book.volumeInfo.title,
                cover: book.volumeInfo.imageLinks?.thumbnail,
                price: book.saleInfo.listPrice.amount,
                quantity: 1,
            },
        });
    };

    const addToFavorites = () => {
        dispatch({
            type: "ADD_TO_FAVORITES",
            payload: {
                id: book.id,
                title: book.volumeInfo.title,
                cover: book.volumeInfo.imageLinks?.thumbnail,
                price: book.saleInfo.listPrice?.amount,
            },
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-14 mobile:p-4">
            <div className="flex mobile:flex-col gap-8 mobile:gap-4">
                <div className="w-1/3 mobile:w-full">
                    <img
                        src={book.volumeInfo.imageLinks?.thumbnail}
                        alt={book.volumeInfo.title}
                        className="w-full rounded-lg shadow-lg mobile:max-w-[200px] mobile:mx-auto"
                    />

                    {book.saleInfo.listPrice && (
                        <Button
                            onClick={addToCart}
                            type="primary"
                            size="medium"
                            className="w-full mt-3"
                        >
                            Добавить в корзину
                        </Button>
                    )}
                    <Button
                        onClick={addToFavorites}
                        type="primary"
                        size="medium"
                        className="w-full mt-2"
                    >
                        Добавить в избранное
                    </Button>
                </div>

                <div className="w-2/3 mobile:w-full">
                    <h1 className="text-3xl mobile:text-xl font-bold mb-4">
                        {book.volumeInfo.title}
                    </h1>
                    <div className="space-y-4">
                        <p className="text-xl mobile:text-lg text-gray-600">
                            Автор: {book.volumeInfo.authors?.join(", ")}
                        </p>

                        <div className="flex mobile:flex-col gap-4 mobile:gap-2 text-sm text-gray-500">
                            <span>Издатель: {book.volumeInfo.publisher}</span>
                            <span>Дата: {book.volumeInfo.publishedDate}</span>
                            <span>Страниц: {book.volumeInfo.pageCount}</span>
                        </div>

                        {book.saleInfo.listPrice && (
                            <p className="text-2xl mobile:text-xl font-bold text-violet-600">
                                {book.saleInfo.listPrice.amount}{" "}
                                {book.saleInfo.listPrice.currencyCode}
                            </p>
                        )}

                        <div className="bg-gray-50 p-4 mobile:p-3 rounded-lg">
                            <h2 className="font-bold mb-2">Описание:</h2>
                            <p className="text-gray-700 mobile:text-sm">
                                {book.volumeInfo.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 mobile:grid-cols-1 gap-4 text-sm">
                            <div>
                                <strong>ISBN:</strong>{" "}
                                {
                                    book.volumeInfo.industryIdentifiers?.[0]
                                        .identifier
                                }
                            </div>
                            <div>
                                <strong>Язык:</strong>{" "}
                                {book.volumeInfo.language}
                            </div>
                            <div>
                                <strong>Категории:</strong>{" "}
                                {book.volumeInfo.categories?.join(", ")}
                            </div>
                            <div>
                                <strong>Возрастной рейтинг:</strong>{" "}
                                {book.volumeInfo.maturityRating}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-4">
                            {book.accessInfo.pdf.isAvailable && (
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded">
                                    PDF доступен
                                </span>
                            )}
                            {book.accessInfo.epub.isAvailable && (
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                                    EPUB доступен
                                </span>
                            )}
                        </div>

                        <a
                            href={book.volumeInfo.previewLink}
                            className="text-violet-500 hover:underline block mobile:text-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Предпросмотр книги
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookInfo;
