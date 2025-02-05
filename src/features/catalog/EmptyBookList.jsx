import useBooks from "../../shared/hooks/useBooks";
import Sceleton from "../../shared/components/Sceleton/Sceleton";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

const EmptyBookList = ({ books }) => {
    const { isLoading, isError } = useBooks();

    return (
        <>
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
        </>
    );
};
export default EmptyBookList;
