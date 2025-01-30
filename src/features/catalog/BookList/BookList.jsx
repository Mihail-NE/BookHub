import BookCard from "./../BookCad/BookCad";
import Sceleton from "../Sceleton/Sceleton";
import useBooks from "../../../hooks/useBooks";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

const BookList = ({ books }) => {
    const { isLoading, isError } = useBooks();

    return (
        <div className="p-14 flex flex-col gap-5">
            {isError && <div>Ошибка: {isError}</div>}
            {isLoading && <Sceleton />}
            {books.items?.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20">
                    <FaceFrownIcon className="w-20 h-20 text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        Ничего не найдено
                    </h3>
                    <p className="text-gray-500">
                        Попробуйте изменить параметры поиска
                    </p>
                </div>
            )}
            <div className="grid grid-cols-2 gap-10 w-full mx-auto">
                {books?.items?.map((book) => (
                    <BookCard
                        key={book.id}
                        id={book.id}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors?.[0]}
                        cover={book.volumeInfo.imageLinks?.thumbnail}
                        price={book.saleInfo.listPrice?.amount}
                        currency={book.saleInfo.listPrice?.currencyCode}
                        publishedDate={book.volumeInfo.publishedDate}
                        publisher={book.volumeInfo.publisher}
                        pageCount={book.volumeInfo.pageCount}
                        isbn={
                            book.volumeInfo.industryIdentifiers?.[0]?.identifier
                        }
                        language={book.volumeInfo.language}
                        categories={book.volumeInfo.categories}
                        buyLink={book.saleInfo.buyLink}
                        pdfAvailable={book.accessInfo.pdf?.isAvailable}
                        epubAvailable={book.accessInfo.epub?.isAvailable}
                        maturityRating={book.volumeInfo.maturityRating}
                        printType={book.volumeInfo.printType}
                    />
                ))}
            </div>
        </div>
    );
};

export default BookList;
