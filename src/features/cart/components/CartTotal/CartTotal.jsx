
const CartTotal = ({ items }) => {

  const subtotal = items.reduce((sum, item) => {
      const price = item.price * item.quantity || 0;
      return sum + price;
  }, 0);

  const shipping = 500;
  const total = subtotal + shipping;

  return (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Итог заказа</h2>

          <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                  <span>Промежуточный итог:</span>
                  <span>{subtotal.toLocaleString()} ₽</span>
              </div>

              <div className="flex justify-between text-gray-600">
                  <span>Доставка:</span>
                  <span>{shipping.toLocaleString()} ₽</span>
              </div>

              <div className="h-px bg-gray-200"></div>

              <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Итого:</span>
                  <span>{total.toLocaleString()} ₽</span>
              </div>
          </div>

          <button
              className="w-full bg-violet-600 text-white py-4 rounded-lg font-semibold
                       hover:bg-violet-700 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
              Оформить заказ
          </button>

          <p className="mt-4 text-sm text-gray-500 text-center">
              Нажимая «Оформить заказ», вы соглашаетесь с условиями доставки
          </p>
      </div>
  );
};

export default CartTotal;