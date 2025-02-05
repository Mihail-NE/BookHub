import BookCard from "./BookCad";
import EmptyBookList from "./EmptyBookList";

const BookList = ({ books }) => {
    return (
        <div className="p-14 flex flex-col gap-5">
            <EmptyBookList books={books} />
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
