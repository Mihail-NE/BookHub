const BookCard = ({
    title,
    author,
    cover,
    price,
    currency,
    publishedDate,
    publisher,
    pageCount,
    categories,
    buyLink,
    previewLink,
    pdfAvailable,
    epubAvailable,
}) => {
    return (
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm mx-auto">
            <div className="h-48 w-32 bg-gray-200 flex items-center justify-center flex-shrink-0">
                {cover ? (
                    <img
                        src={cover}
                        alt={title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="text-gray-500 text-sm">
                        Нет изображения
                    </div>
                )}
            </div>

            <div className="flex flex-col w-90 justify-between p-4 flex-grow">
                <div>
                    <h2 className="text-base font-semibold text-gray-900 truncate">{title}</h2>
                    <p className="text-sm text-gray-500 mb-2 truncate">Автор: {author}</p>
                </div>

                <p className="text-md font-bold text-gray-800 mb-3">
                    {price ? `${price} ${currency}` : "Цена не указана"}
                </p>

                <div className="text-sm text-gray-600 space-y-1">
                    <p>Дата: {publishedDate || "Не указана"}</p>
                    <p>Издатель: {publisher || "Не указан"}</p>
                    <p>Страницы: {pageCount || "N/A"}</p>
                    <p className="truncate">Категории: {categories?.join(", ") || "Нет"}</p>
                </div>

                <div className="mt-4 flex gap-2">
                    {buyLink && (
                        <a
                            href={buyLink}
                            className="text-xs text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transition"
                        >
                            Купить
                        </a>
                    )}
                    {previewLink && (
                        <a
                            href={previewLink}
                            className="text-xs text-blue-500 hover:underline"
                        >
                            Предпросмотр
                        </a>
                    )}
                </div>

                <div className="mt-3 text-xs text-gray-500">
                    PDF: {pdfAvailable ? "Да" : "Нет"} | EPUB: {epubAvailable ? "Да" : "Нет"}
                </div>
            </div>
        </div>
    );
};

export default BookCard;