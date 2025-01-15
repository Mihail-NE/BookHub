import { Link } from "react-router-dom";

const BookCard = ({
    id,
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
    pdfAvailable,
    epubAvailable,
}) => {
    return (
        <div className="flex bg-white items-center shadow-md rounded-lg overflow-hidden w-[660px] mx-auto">
            <div className="h-[200px] w-32 bg-gray-200 flex  justify-center flex-shrink-0">
                {cover ? (
                    <img
                        src={cover}
                        alt={title}
                        className="w-full h-full object-cover "
                        loading="lazy"
                    />
                ) : (
                    <div className="text-gray-500 text-sm">Нет изображения</div>
                )}
            </div>

            <div className="flex flex-col justify-between p-4 flex-grow">
                <div>
                    <h2 className="text-base text-wrap font-semibold text-gray-900 truncate">
                        {title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2 truncate">
                        Автор: {author}
                    </p>
                </div>

                <p className="text-md font-bold text-gray-800 mb-3">
                    {price ? `${price} ${currency}` : "Цена не указана"}
                </p>

                <div className="text-sm text-gray-600 space-y-1">
                    <p>Дата: {publishedDate || "Не указана"}</p>
                    <p>Издатель: {publisher || "Не указан"}</p>
                    <p>Страницы: {pageCount || "N/A"}</p>
                    <p className="truncate">
                        Категории: {categories?.join(", ") || "Нет"}
                    </p>
                </div>

                <div className="mt-4 flex gap-2">
                    {buyLink && (
                        <a
                            href={buyLink}
                            className="text-xs text-white bg-violet-500 hover:bg-violet-600 px-3 py-1 rounded transition"
                        >
                            Купить
                        </a>
                    )}
                    <Link to={`/catalog/${id}`} className="text-xs text-violet-500 hover:underline">
                        <button className="text-xs text-white bg-violet-500 hover:bg-violet-600 px-3 py-1 rounded transition">
                            подробнее
                        </button>
                    </Link>
                </div>

                <div className="mt-3 text-xs text-gray-500">
                    PDF: {pdfAvailable ? "Да" : "Нет"} | EPUB:{" "}
                    {epubAvailable ? "Да" : "Нет"}
                </div>
            </div>
        </div>
    );
};

export default BookCard;
