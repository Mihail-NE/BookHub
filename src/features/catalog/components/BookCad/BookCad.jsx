
const BookCard = ({
    title,
    author,
    cover,
    price,
    currency,
    publishedDate,
    publisher,
    pageCount,
    isbn,
    language,
    categories,
    buyLink,
    previewLink,
    pdfAvailable,
    epubAvailable,
    maturityRating,
    printType
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={cover} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-600">Автор: {author}</p>
                <p className="text-gray-800 font-bold">
                    {price} {currency}
                </p>
                <p>Дата публикации: {publishedDate}</p>
                <p>Издатель: {publisher}</p>
                <p>Количество страниц: {pageCount}</p>
                <p>ISBN: {isbn}</p>
                <p>Язык: {language}</p>
                <p>Категория: {categories?.join(', ')}</p>
                <p>Возрастной рейтинг: {maturityRating}</p>
                <p>Тип печати: {printType}</p>
                <div className="mt-2">
                    <a href={buyLink} className="text-blue-500 hover:underline">Купить</a>
                    <a href={previewLink} className="ml-2 text-blue-500 hover:underline">Предпросмотр</a>
                </div>
                <p className="mt-2">
                    PDF доступен: {pdfAvailable ? 'Да' : 'Нет'} | EPUB доступен: {epubAvailable ? 'Да' : 'Нет'}
                </p>
            </div>
        </div>
    );
};

export default BookCard;