import BookCard from "./../BookCad/BookCad";
import Sceleton from "../Sceleton/Sceleton";
import useBooks from "../../../hooks/useBooks";

const BookList = () => {
    const { books, isLoading, isError, startIndex, setStartIndex } = useBooks();

    const showMore = () => {
        setStartIndex((prevIndex) => prevIndex + 10);
    };

    return (
        <div className="p-14 flex flex-col gap-5">
            {isError && <div>Ошибка: {isError}</div>}
            {isLoading && <Sceleton />}
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
                        isbn={book.volumeInfo.industryIdentifiers?.[0]?.identifier}
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
            {startIndex === 40 ? null : (
                <button
                    className="rounded-md border-[1px] border-violet-600 hover:bg-violet-50 duration-200 p-3 w-full text-violet-600"
                    onClick={showMore}
                >
                    Показать еще
                </button>
            )}
        </div>
    );
};

export default BookList;
