const CartItem = ({ item }) => {
    return (
        <div className="flex justify-between items-center p-4 border-b hover:bg-gray-50 transition">
            <div className="w-2/5 flex items-center gap-4">
                <img
                    src={item.volumeInfo.imageLinks.thumbnail}
                    alt={item.volumeInfo.title}
                    className="w-16 h-20 object-cover rounded"
                />
                <span className="font-medium text-gray-800">
                    {item.volumeInfo.title}
                </span>
            </div>

            <div className="w-1/5 text-center text-gray-600">
                {item.saleInfo.listPrice.amount} ₽
            </div>

            <div className="w-1/5 text-center">
                <div className="flex items-center justify-center gap-2">
                    <button className="p-1 rounded hover:bg-gray-100">-</button>
                    <span className="w-8 text-center">{1}</span>
                    <button className="p-1 rounded hover:bg-gray-100">+</button>
                </div>
            </div>

            <div className="w-1/5 text-center font-medium text-gray-800">
                {"item.total"} ₽
            </div>
        </div>
    );
};

export default CartItem;
